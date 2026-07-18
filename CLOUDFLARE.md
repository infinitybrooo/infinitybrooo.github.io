# CheatGuys Cloudflare Pages

Proyecto espejo para migrar el sitio desde Netlify a Cloudflare Pages.

## Local

```powershell
npm ci
npm run check
npm test
npm run dev:cloudflare
```

Wrangler sirve el sitio y las funciones en `http://127.0.0.1:8788`.

## Secrets

Configura estas variables en Cloudflare Pages:

```text
CG_ALLOWED_ORIGIN=https://cheatguys-cloudflare.pages.dev
GROQ_API_KEY
GROQ_MODEL=llama-3.3-70b-versatile
GEMINI_API_KEY
GEMINI_MODEL=gemini-2.5-flash
```

Comandos interactivos:

```powershell
npx wrangler pages secret put CG_ALLOWED_ORIGIN --project-name cheatguys-cloudflare
npx wrangler pages secret put GROQ_API_KEY --project-name cheatguys-cloudflare
npx wrangler pages secret put GROQ_MODEL --project-name cheatguys-cloudflare
npx wrangler pages secret put GEMINI_API_KEY --project-name cheatguys-cloudflare
npx wrangler pages secret put GEMINI_MODEL --project-name cheatguys-cloudflare
```

## Deploy directo

```powershell
npx wrangler login
npm run deploy:cloudflare
```

El sitio actual en Netlify no se modifica.

