# howard-yen.github.io

Personal academic website built with [Next.js](https://nextjs.org/) and deployed to GitHub Pages.

## Getting Started

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build static site to /out
npm run deploy     # Build + deploy to GitHub Pages (master branch)
```

## Project Structure

```
src/
  app/
    layout.tsx                 # Root layout (navbar, footer, fonts, metadata)
    page.tsx                   # About / home page
    globals.css                # All styles
    publications/page.tsx      # Publications page
    blog/
      page.tsx                 # Blog index
      [slug]/page.tsx          # Individual blog post
  components/
    Navbar.tsx                 # Top navigation bar
    Footer.tsx                 # Social links + footer text
    HashRedirect.tsx           # Redirects old #hash URLs
  data/
    publications.json          # Publication entries
    social-media.json          # Social media links
  content/
    blog/                      # MDX blog posts
  lib/
    blog.ts                    # Utilities for reading blog posts
  images/                      # Static images imported in code
public/                        # Static assets served as-is (CV.pdf, icons, etc.)
```

## How To

### Add a publication

Add an entry to `src/data/publications.json`:

```json
{
  "title": "Paper Title",
  "authors": "Author One, Howard Yen, Author Two",
  "venue": "Proceedings of XYZ",
  "year": 2026,
  "links": [
    { "name": "Paper", "url": "https://arxiv.org/abs/..." },
    { "name": "Code", "url": "https://github.com/..." }
  ],
  "highlight": "Spotlight"
}
```

- Entries are rendered in array order (newest first).
- "Howard Yen" in the authors string is automatically bolded.
- `highlight` is optional (rendered in orange).

### Add a blog post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "My Post Title"
date: "2026-05-07"
summary: "A short description shown on the blog index."
---

Write **Markdown** here. You can also use JSX and React components inline.
```

The post will appear at `/blog/<filename>/` (the filename without `.mdx` becomes the URL slug).

### Edit the About page

Edit `src/app/page.tsx` directly. Content is in JSX — each `<div className="card">` block is a white card section.

### Edit navigation links

Edit the `links` array in `src/components/Navbar.tsx`.

### Edit social links

Edit `src/data/social-media.json`. Icons live in `public/SocialMedia/`.

### Edit site metadata

Title, description, and favicon are set in `src/app/layout.tsx` via the `metadata` export.

## Deployment

`npm run deploy` builds the site and pushes the static output to the `master` branch via `gh-pages`. GitHub Pages serves from `master`.

The `.nojekyll` file is automatically created during deploy to ensure the `_next/` directory is served correctly.
