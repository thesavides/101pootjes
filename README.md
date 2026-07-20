# 101 Pootjes — Website (Phase 1)

Static HTML/CSS prototype of the homepage for **101 Pootjes**, an independent
pet shop in Diemen, NL. This is the visual reference for the WordPress +
Elementor Pro build — not the production site.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | Homepage — all 12 sections from the Phase 1 brief |
| `styles.css` | Design system + layout. Tokens at the top mirror Elementor Global Colours/Fonts |
| `script.js` | Sticky-header shadow + mobile menu (Elementor handles this in production) |
| `assets/img/` | Logo (real) + labelled SVG placeholders for every photo slot |
| `assets/sprite.html` | Source of the inlined SVG icon set |
| `assets/make-placeholders.sh` | Regenerates the placeholder images |

## Viewing it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Before launch

Replace the `assets/img/*.svg` placeholders with real WebP photography —
**keep the same filenames** and no markup changes are needed.

## Design tokens

- Green `#67B32E` · White `#FFFFFF` · Light grey `#F6F7F9` · Dark grey `#333333`
- Accents (icons/category cards only): blue, orange, yellow
- Headings **Poppins**, body **Inter**

## Not static (needs WordPress plugins)

The weather widget, Instagram feed and Google Reviews are visual placeholders
here — each needs a plugin + API key in the WordPress build. See the handover
doc for the exact setup.

## Roadmap

Phase 1 is this brochure site. Phases 2–5 (catalogue, accounts, loyalty, PWA)
are out of scope — see the brief.
