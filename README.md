# TeachHorizon Website

A bilingual Arabic/English, responsive personal website for `teachhorizon.org`, deployed as a lightweight Nginx Docker container on Dokploy.

## Website sections

- Introductory hero and TeachHorizon monochrome identity.
- Direct social profile cards for TikTok, YouTube, Instagram, Facebook, Threads, and Pinterest.
- Projects: Function Grapher Telegram bot and Quantum Vortex 3D experience.
- Payhip digital store and Ko-fi creator support page.
- About, Contact, Privacy Policy, Terms of Use, and branded 404 pages.
- Arabic-first content with an Arabic/English language switch.
- Responsive layout for phones, tablets, and desktop screens.
- No source-code repository links on the public website.

## Public destinations

- Social directory: https://linktr.ee/TeachHorizon
- TikTok: https://www.tiktok.com/@teachhorizon
- YouTube: https://www.youtube.com/@teachhorizon
- Instagram: https://www.instagram.com/teachhorizon
- Facebook: https://www.facebook.com/TeachHorizon
- Threads: https://www.threads.com/@teachhorizon
- Pinterest: https://www.pinterest.com/teachhorizon_official/
- Ko-fi: https://ko-fi.com/teachhorizon
- Payhip store: https://payhip.com/teachhorizon
- Function Grapher: https://t.me/function_grapher_bot
- Quantum Vortex: https://gitpage.teachhorizon.online

Update these destinations in `links.js` when a public link changes. The website uses the supplied destinations and does not expose private source repositories.

## Run locally

```bash
docker build -t teachhorizon-website .
docker run --rm -p 8080:80 teachhorizon-website
```

Open `http://localhost:8080`.

## Deploy on Dokploy

1. Connect `hadi-hani/chatgpt_create_me_website`.
2. Select Dockerfile build type and use `Dockerfile` from the repository root.
3. Set the internal container port to `80`.
4. Deploy and test the generated application domain.
5. Attach `teachhorizon.org` in the application's Domains settings and enable HTTPS.
6. Keep the existing `blog.teachhorizon.org` Blogger DNS records unchanged.

## Main files

- `index.html` — bilingual responsive landing page.
- `styles.css` — responsive brand styles.
- `main.js` — language switching and link assignment.
- `links.js` — public link destinations.
- `about.html`, `contact.html`, `privacy.html`, `terms.html`, `404.html` — secondary pages.
- `legal.js` — language switch for secondary pages.
- `brand-logo.svg`, `favicon.svg` — brand marks.
- `Dockerfile`, `nginx.conf` — Docker image and Nginx configuration.
- `robots.txt`, `sitemap.xml` — search crawler guidance.

The website is static and does not require a database or runtime environment secrets.
