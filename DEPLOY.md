# Deploy

This project is configured for GitHub Pages deployment.

## Recommended: GitHub Actions Deployment

This repo now includes `.github/workflows/deploy.yml`, which builds and deploys the site automatically whenever you push to `main`.

### 1. Push your changes

```bash
git add .
git commit -m "Prepare portfolio for deployment"
git push origin main
```

### 2. Enable GitHub Pages in the repository

In GitHub:

1. Open the repository.
2. Go to `Settings` → `Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.

After that, every push to `main` will deploy the site automatically.

## Manual Deployment Option

If you want to deploy from your machine instead of using Actions:

### 1. Install dependencies

```bash
npm install
```

### 2. Deploy

```bash
npm run deploy
```

This runs the build first, then publishes `dist/` using the `gh-pages` package.

## Local Check Before Deploying

```bash
npm run build
npm run preview
```

## Notes

- This repo is configured as a GitHub Pages user site, so Vite uses `base: "/"`.
- The production build output goes to `dist/`.
- If GitHub Pages is not live immediately, give it a minute and check the Actions tab for deployment status.
