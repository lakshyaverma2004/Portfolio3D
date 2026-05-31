# Lakshya Verma — Portfolio

A fast, single-page portfolio built with **Next.js** (App Router), styled as a
dark editorial studio site, and deployed on **Vercel**.

## Run it locally

Requires [Node.js](https://nodejs.org) 18.18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours — one file

Almost everything lives in **`data/content.js`**: your headline, intro, stats,
projects, services, experience, education, about, and contact details. Edit it,
save, and the page updates live.

**Italic accents:** wrap any word in `*asterisks*` to render it as the italic
serif accent. Example: `"What I've *built*."` makes *built* italic.

**Project links:** the repo links currently point at your GitHub profile —
swap each `repo` (and add a `link` for live demos) in `content.js` with the
exact URLs.

**Résumé:** `public/resume.pdf` is already included (your referral resume) and
wired to the "Download résumé" button. Replace that file to update it, or set
`resumeUrl: ""` in `content.js` to hide the button.

**Colors & fonts:** tweak the variables at the top of `app/globals.css`
(`--bg`, `--ink`, `--accent`). Fonts are set in `app/layout.js`.

## Deploy to Vercel

1. Push this folder to a new **GitHub** repository.
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project**.
3. Import the repo. Vercel auto-detects Next.js — click **Deploy**. No config.
4. Live URL in ~1 minute. Every `git push` redeploys automatically.

Custom domain later: Vercel project → **Settings → Domains**.
