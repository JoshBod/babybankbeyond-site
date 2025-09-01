# Babybank & Beyond – static site starter

A lightweight, accessible website for a community baby bank. No cookies by default. Built for **GitHub Pages**.

## Structure
```
/assets/css/site.css
/assets/js/main.js
index.html
get-help.html
donate-items.html
donate.html
volunteer.html
about.html
contact.html
privacy.html
```
Replace placeholders (donation links, form endpoints, stats).

## Forms
This template uses **Formspree** style endpoints. Create a free Formspree project, then replace `https://formspree.io/f/your-id` with your real form endpoint in:
- `get-help.html` (2 forms)
- `volunteer.html`
- `contact.html`

## Deploy on GitHub Pages
1. Create a new repo, e.g. `babybankbeyond-site`.
2. Upload all files/folders to the repo root and commit.
3. In **Settings → Pages**, set **Source: Deploy from a branch**, Branch: `main` (root). Wait for the green check.
4. Add your custom domain `babybankbeyond.org` in **Pages → Custom domain**. GitHub will suggest DNS.
5. In IONOS, create **CNAME** for `www` → `babybankbeyond.org.` and/or A/AAAA records to GitHub Pages (or follow the CNAME steps GitHub shows).
6. Enable **Enforce HTTPS** in Pages once the certificate is ready.

## Customisation
- Brand colours in `:root` at `assets/css/site.css`
- Service area, phone, email, address in the HTML files and footer.
- Update meta tags in the `<head>` for SEO/OG.
