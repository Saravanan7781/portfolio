// Tiny BM25 retriever. The knowledge base is small, so keyword search is accurate enough and
// needs no embedding provider, vector database, or second API key. If it grows to hundreds of
// chunks, swap `retrieve` for an embeddings-backed version; the rest of the app does not change.

const chunks = require('./knowledge');

const STOPWORDS = new Set((
  'a an the and or but if of to in on at for with by from as is are was were be been being do does did ' +
  'has have had it its this that these those i you he she they we me my your his her their our what ' +
  'which who whom how when where why can could would should will about tell any some please also more ' +
  'than then so not no yes there here into over out up down very just like get got know does saravanan'
).split(' '));

// crude stemmer: good enough to match "projects"/"project", "building"/"built" is handled by keywords
function stem(word) {
  return word
    .replace(/(ing|ed|es|s)$/, '')
    .replace(/(.)\1$/, '$1');
}

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9+#.]+/g) || [])
    .map((w) => w.replace(/^\.+|\.+$/g, ''))
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
    .map(stem);
}

// title and keywords count extra by being repeated when the document is indexed
const docs = chunks.map((chunk) => {
  const tokens = tokenize(`${chunk.title} ${chunk.title} ${chunk.keywords} ${chunk.keywords} ${chunk.text}`);
  const tf = new Map();
  tokens.forEach((t) => tf.set(t, (tf.get(t) || 0) + 1));
  return { chunk, tf, length: tokens.length };
});

const avgLength = docs.reduce((sum, d) => sum + d.length, 0) / docs.length;
const docFreq = new Map();
docs.forEach(({ tf }) => tf.forEach((_, term) => docFreq.set(term, (docFreq.get(term) || 0) + 1)));

const K1 = 1.5;
const B = 0.75;

function score(queryTerms, doc) {
  let total = 0;
  for (const term of queryTerms) {
    const freq = doc.tf.get(term);
    if (!freq) continue;
    const df = docFreq.get(term);
    const idf = Math.log(1 + (docs.length - df + 0.5) / (df + 0.5));
    total += idf * ((freq * (K1 + 1)) / (freq + K1 * (1 - B + B * (doc.length / avgLength))));
  }
  return total;
}

// `query` should hold the latest question plus a little earlier context so follow-ups
// like "what stack did it use?" still find the project being discussed
function retrieve(query, { limit = 4 } = {}) {
  const terms = [...new Set(tokenize(query))];
  const ranked = docs
    .map((doc) => ({ chunk: doc.chunk, score: score(terms, doc) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.chunk);

  // always ground the answer in the profile, which also covers vague questions like "tell me about him"
  const profile = chunks.find((c) => c.id === 'profile');
  if (!ranked.some((c) => c.id === 'profile')) ranked.push(profile);
  return ranked;
}

module.exports = { retrieve, tokenize };
