# TeachHorizon Website

A small, bilingual Arabic/English, responsive static website for `teachhorizon.org`, designed to run as a lightweight Docker container on Dokploy.

## Included

- Arabic-first interface and a working Arabic/English toggle.
- Responsive social cards for TikTok, YouTube, Instagram, Facebook, Threads, and Pinterest.
- A personal experiments area for Quantum Vortex and Function Grapher.
- Separate personal support links for Ko-fi and Payhip.
- No database, server-side application, analytics, tracking script, or educational/blog section.
- Docker + Nginx deployment files for Dokploy.

## Update links before public deployment

Edit **`links.js`**. Replace each empty string with the complete public URL for that destination. Example:

```js
instagram: "https://www.instagram.com/your-handle/"
```

The social profile URLs and Ko-fi/Payhip URLs were intentionally left empty because the exact destinations could not be verified from the Linktree page during packaging. When a URL is empty, its card is displayed in a disabled state rather than linking to a made-up address.

Known project destinations currently set:

- Quantum Vortex source: https://github.com/hadi-hani/quantum_vortex
- Function Grapher Telegram bot: https://t.me/function_grapher_bot
- Function Grapher source: https://github.com/hadi-hani/function_grapher

## Run locally

With Docker installed:

```bash
docker build -t teachhorizon-website .
docker run --rm -p 8080:80 teachhorizon-website
```

Open `http://localhost:8080`.

You can also serve the folder with any static HTTP server. Do not simply open `index.html` as a local file if you want to test persistence of the language toggle in your browser.

## Deploy on Dokploy

1. Create a **new repository** named `teachhorizon-website` under your GitHub account and upload these files to its root.
2. In Dokploy, create a new application and connect the new Git repository.
3. Choose Dockerfile deployment; leave the Dockerfile path as `Dockerfile` and the internal port as `80`.
4. Deploy and test the provided service URL first.
5. Add `teachhorizon.org` and/or `www.teachhorizon.org` under the domain settings for this app, with HTTPS enabled in Dokploy.
6. In Cloudflare DNS, point the chosen hostname to the server/Dokploy as instructed by the Dokploy domain screen. Do not change the existing `blog.teachhorizon.org` Blogger CNAME records.

## Files

- `index.html` — document structure and metadata
- `styles.css` — layout and responsive visual styling
- `main.js` — rendering and language toggle
- `links.js` — editable destination URLs
- `Dockerfile`, `nginx.conf` — container and web server setup
- `favicon.svg` — simple site icon

## Notes

- The language selection is saved in local storage when available; the site otherwise defaults to Arabic.
- Add the social/support destinations to `links.js` before launch so that all intended cards work.
- This bundle does not create a GitHub repository or configure the user's Dokploy/Cloudflare accounts automatically.
