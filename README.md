# fauzanrizqan.com

Personal portfolio for Fauzan Rizqan, built with React and Vite.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Requires Node.js 18 or newer.

## Editing content

All text, links and projects live in **`src/data/site.js`**. Search it for `TODO`:

- `links`: LinkedIn, email, YouTube, resume and booking link. Empty values are hidden.
- `formspreeId`: create a free form at https://formspree.io to turn on the contact form.
- `projects`: replace the three placeholder case studies. Entries with `placeholder: true`
  show only in `npm run dev` (with a yellow tag) and are left out of the production build.
- Put your resume PDF in `public/` and set `links.resume` to its path.

Photos are in `src/assets/`. Page title, description and the social preview image
(`public/og-image.png`) are set in `index.html`.

## Structure

```
index.html              page title, SEO and social preview tags
src/data/site.js        all content
src/components/         one file per section
src/styles/global.css   design tokens and styles
```

## Deploy

Works on Vercel or Netlify with no config: build command `npm run build`, output `dist`.
