// Local stand-in for Vercel's /api routing: `npm run api` serves api/chat.js on port 3001,
// and the "proxy" field in package.json forwards /api calls from `npm start` to it.
// Keys come from .env.local (see .env.example).

const http = require('http');
const path = require('path');
const handler = require(path.join(__dirname, '..', 'api', 'chat.js'));

http.createServer((req, res) => {
  if (!req.url.startsWith('/api/chat')) {
    res.statusCode = 404;
    return res.end();
  }
  let raw = '';
  req.on('data', (chunk) => { raw += chunk; });
  req.on('end', () => {
    try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = null; }
    handler(req, res);
  });
}).listen(3001, () => console.log('chat API listening on http://localhost:3001/api/chat'));
