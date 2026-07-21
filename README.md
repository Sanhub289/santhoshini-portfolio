# Santhoshini Vallakatla — Portfolio

Built with **Vite + TypeScript + Node.js**. No framework — pure TS showcasing frontend and tooling skills.

## Project Structure

```
santhoshini-portfolio/
├── index.html              # Vite entry point
├── vite.config.ts          # Vite config (set your repo name here)
├── tsconfig.json
├── package.json
└── src/
    ├── main.ts             # App entry — wires everything together
    ├── data.ts             # All resume content lives here
    ├── render.ts           # HTML builder functions
    ├── canvas.ts           # Node-graph animation
    ├── reveal.ts           # Scroll reveal
    ├── style.css           # All styles
    ├── types.ts            # TypeScript interfaces
    ├── vite-env.d.ts       # Asset type declarations
    └── assets/
        └── profile.png     # Your profile photo
```

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173
```

## Swap your photo

Replace `src/assets/profile.png` with your own photo (same filename, or update the import in `main.ts`).

## Update your content

All resume content is in **`src/data.ts`** — edit skills, jobs, projects, and education there.

## Deploy to GitHub Pages

### First time setup

1. Create a new repo on GitHub (e.g. `santhoshini-portfolio`)
2. Open `vite.config.ts` and set `base` to match your repo name:
   ```ts
   base: '/santhoshini-portfolio/',
   ```
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/santhoshini-portfolio.git
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. On GitHub → your repo → **Settings → Pages → Source: `gh-pages` branch**

Your site will be live at:
`https://YOUR_USERNAME.github.io/santhoshini-portfolio/`

### Future updates

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```
