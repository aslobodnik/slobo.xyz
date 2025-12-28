# slobo.xyz

Personal website - experiments, blog posts, curated content.

## Tech Stack

- **Eleventy (11ty)** - static site generator
- **Tailwind CSS** - styling via utility classes + custom components
- **PostCSS** - CSS processing

## Commands

```bash
npm start    # dev server with hot reload
npm run build  # production build to _site/
```

## Project Structure

```
src/
├── _includes/
│   ├── default.html   # master layout
│   └── hero.html      # reusable hero partial
├── _data/             # JSON data files
│   ├── books.json
│   ├── quotes.json
│   ├── products.json
│   ├── resources.json
│   └── projects.json
├── img/               # images (webp preferred)
├── styles.css         # tailwind + component classes
└── *.html             # pages
_site/                 # build output (gitignored)
```

## Adding Content

### New Page

```html
---
layout: default
title: Page Title
description: For OpenGraph/SEO
image: /img/optional-og-image.webp
---

{% include "hero.html", title: "Page Title", image: "/img/icon.webp" %}

<div class="content-list">
  <!-- content here -->
</div>
```

### New Blog Post

1. Add page under `src/` (e.g., `src/my-post.html`)
2. Link it from `thoughts.html`

### Adding to Data-Driven Pages

Edit the JSON file in `src/_data/`:
- `books.json` - book recommendations
- `quotes.json` - quote collection
- `products.json` - product recommendations
- `resources.json` - investing resources
- `projects.json` - homepage projects

## CSS Component Classes

Defined in `src/styles.css`:

| Class | Use |
|-------|-----|
| `.content-link` | Green link with hover underline |
| `.section-title` | H2 styling (mt-8, mb-3, text-xl, bold) |
| `.content-list` | Standard content container |
| `.poker-card` | Poker card images |
| `.hand-title` | Poker hand name styling |
| `.card-container` | Poker card row |
| `.thought-card` | Blog post card |
| `.thought-link` | Blog post title link |
| `.table-cell-*` | Table styling (header, content, price) |

## Conventions

- **Layout**: all pages use `layout: default`
- **Hero**: use `{% include "hero.html", title: "...", image: "..." %}`
- **Container**: `max-w-2xl` centered content
- **Colors**: green accent (`text-green-600`, `hover:text-green-700`)
- **Links**: use `.content-link` class
- **Sections**: use `.section-title` for h2 headings
- **Content**: wrap in `.content-list`
- **Font**: monospace throughout (`font-mono`)
- **Images**: webp format, stored in `src/img/`
- **HTML in data**: use `| safe` filter to render HTML from JSON

## Notes

- No JavaScript - all interactivity via CSS (hover states, transitions)
- Responsive breakpoints on nav and hero images
- Partials use Liquid templating syntax
