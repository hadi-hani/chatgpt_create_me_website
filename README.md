# TeachHorizon Website

A small, bilingual Arabic/English, responsive static website for `teachhorizon.org`, designed to run as a lightweight Docker container on Dokploy.

## Included

- Arabic-first interface and an Arabic/English language toggle.
- Responsive cards for TikTok, YouTube, Instagram, Facebook, Threads, and Pinterest.
- A personal experiments area for Quantum Vortex and Function Grapher.
- Separate personal support links for Ko-fi and Payhip.
- No database, server-side app, analytics, tracking script, or educational/blog section.
- Docker + Nginx configuration for Dokploy.

## Update links before public launch

Edit `links.js`. Replace each empty string with the full URL for that destination. For example:

```js
instagram: "https://www.instagram.com/your-handle/"
```

Social profiles and Ko-fi/Payhip destinations are currently blank because the exact URLs could not be verified from the Linktree page. Empty destinations render as disabled cards rather than fake links.

Known project destinations are already configured:

- Quantum Vortex source: https://github.com/hadi-hani/quantum_vortex
- Function Grapher Telegram bot: https://t.me/function_grapher_bot
- Function Grapher source: https://github.com/hadi-hani/function_grapher

## Run locally

```bash
docker build -t teachhorizon-website .
docker run --rm -p 8080:80 teachhorizon-website
```

Open `http://localhost:8080`.

## Deploy on Dokploy

1. In Dokploy, create a new application and connect this repository: https://github.com/hadi-hani/chatgpt_create_me_website
2. Choose Dockerfile deployment; use `Dockerfile` as the Dockerfile path and `80` as the internal port.
3. Deploy and test the generated service URL before attaching the public domain.
4. Add `teachhorizon.org` and/or `www.teachhorizon.org` in the application's domain settings, then enable HTTPS according to Dokploy's instructions.
5. In Cloudflare DNS, point the chosen hostname to the target specified by Dokploy. Do not change the existing `blog.teachhorizon.org` Blogger CNAME records.

## Main files

- `index.html` — document structure and metadata
- `styles.css` — responsive visual styling
- `main.js` — page rendering and language toggle
- `links.js` — editable destination URLs
- `Dockerfile`, `nginx.conf` — container and web server setup
- `favicon.svg` — site icon

The website is static and requires no database or environment secrets. The repository contains the site files; it does not automatically deploy to Dokploy or edit Cloudflare DNS.