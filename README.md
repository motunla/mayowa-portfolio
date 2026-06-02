# mayowa-portfolio

> Portfolio site for Mayowa Otunla — scaffold and starter content.

## Local preview

Open `index.html` in your browser, or run a lightweight server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Next steps

- Fill in your real bio in the `About` section.
- Replace project cards in `index.html` under `#portfolio` with your projects (images, links).
- Add resume link and contact form backend if desired.

### Contact form (Formspree)

The contact form is wired to use Formspree if you set the form `action` to your Formspree endpoint (example: `https://formspree.io/f/your-id`). The site includes client-side handling that will post to Formspree and show a success/failure message. Replace `YOUR_FORM_ID` in `index.html` with your real Formspree ID.

### Resume link

Header `Resume / Portfolio` currently links to your Notion portfolio. To use a PDF resume instead, add `assets/resume.pdf` and update the header link to `/assets/resume.pdf`.

## Deploy

Push to GitHub and enable GitHub Pages (use `main` branch or `gh-pages`).
