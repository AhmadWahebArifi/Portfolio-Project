# Portfolio Project

A Vite + React portfolio with i18n (English/Persian) and GitHub Pages deployment.

## Live Demo

- Production (GitHub Pages): `https://ahmadwahebarifi.github.io/Portfolio-Project/`

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – build for production
- `npm run preview` – preview production build locally

## Development

```bash
cd Project
npm ci
npm run dev
```

## Deployment

Deployment is automated via GitHub Actions on push to `main`:
- Workflow: `.github/workflows/deploy.yml`
- Vite `base` set to `/Portfolio-Project/` for Pages

Trigger a deployment by pushing to `main`.
