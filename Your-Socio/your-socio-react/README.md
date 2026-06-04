# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contributor Setup

Follow these steps to run the project locally:

1. Clone the repo and open the React app folder:

```bash
git clone <repo-url>
cd Your-Socio/your-socio-react
```

2. Create a local `.env` from the example and fill with your Firebase Web app values:

```bash
cp .env.example .env
# then edit .env and paste your Firebase config values
```

3. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Notes:
- The app reads Vite env vars prefixed with `VITE_` from `.env` (see `.env.example`).
- Never commit real secrets. Ensure `your-socio-react/.env` is listed in `.gitignore`.
- If `.env` is missing or empty the app runs in Mock Auth Mode (local-only authentication).

To build for production and deploy the `dist/` folder to a static host:

```bash
npm run build
# deploy the contents of dist/ to Netlify, Vercel, Firebase Hosting, etc.
```
