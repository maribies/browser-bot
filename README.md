# Browser Bot Experiment

## What this repo is
A prototype for a small chatbot that will live on a personal portfolio site.

The first question: can an embedding model and a small generative model load in the browser, locally, and answer usefully from her content?

## Hard constraints

- **Zero budget.** No hosted model APIs, no paid hosting, no service that could produce a bill. Everything will run in the browser.
- **Nothing is collected.** No analytics, no error reporting, no logging of questions, nothing.
- **This repo is public.** Nothing private goes in: no secrets, no private contact details, no unpublished personal information.
- **Do not commit model weights.** Git rejects files over 100 MB. Load models from Hugging Face at runtime; keep any local copies git-ignored.
- **Accuracy over cleverness.**A bot that invents job history is worse than no bot.

## Development

Built with [Vite](https://vite.dev) and React. Pages are pre-rendered to static HTML at build time.

- `npm run dev`: local dev server.
- `npm run build`: builds and pre-renders the site into `dist/`.
- `npm run preview`: serves the built site locally.

### Process

1. **Minimal data.** Copying over the basics of the site, with the main site content.
2. **Search test.** Load one embedding model in the browser and check it ranks sensible chunks for about ten questions.
3. **Model test.** Load one generative model on WebGPU, give it the correct chunks by hand, and ask about ten open questions.
4. **Record what happened** in `RESULTS.md`.
