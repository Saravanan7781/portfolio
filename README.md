# Saravanan S - Portfolio

Personal portfolio built with React (Create React App). Live at https://saravanan7781.vercel.app/

## Sections

- **Home**: animated name reveal with links to projects and contact
- **About / Skills**: avatar with orbiting tech logos, plus a clickable skill explorer
- **Projects**: real projects with tech tags, code links and live demos
- **Achievements**: scroll-driven card stack
- **Contact**: validated form (opens your mail app) and social links

## Run it

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build in /build
```

## Editing content

Everything you will want to change lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `projects.js` | project cards (name, description, tags, repo, live link) |
| `skills.js` | skill logos and their percentage bars |
| `links.js` | email address and social links |

Achievements are listed at the top of `src/Components/AboutLayout.jsx`.

## Notes

- The contact form has no backend: on submit it opens a pre-filled `mailto:` message.
- The cat animation in the About section uses CSS scroll-driven animations. Browsers without support just show the cat in place.

## Chatbot (Claude + RAG)

The chat bubble answers questions about Saravanan using retrieval-augmented generation.

- `api/_lib/knowledge.js`: the facts, one chunk per topic. **Edit this to change what the bot knows.**
- `api/_lib/retrieve.js`: BM25 keyword retrieval that picks the best chunks for each question.
- `api/chat.js`: serverless function. Retrieves context, calls Claude, and streams the reply. The API key lives only here.
- `src/Components/Chatbot.jsx`: the chat widget.

Setup:

1. Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` (or `ANTHROPIC_API_KEY` to use Claude).
2. Run `npm run api` in one terminal and `npm start` in another. CRA proxies `/api` to port 3001.
3. In production, add the same variable under Vercel > Settings > Environment Variables and redeploy.

Gemini tries `gemini-3.5-flash`, then `gemini-3.1-flash-lite`, then `gemini-3.8-flash` if one is overloaded. Set `GEMINI_MODEL` to pin a model. Claude defaults to `claude-opus-5-5`; set `CHAT_MODEL=claude-haiku-5-5` for a cheaper one.
