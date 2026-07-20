# 101 Pootjes — Website (Phase 1)

Static HTML/CSS prototype of the homepage for **101 Pootjes**, an independent
pet shop in Diemen, NL. This is the visual reference for the WordPress +
Elementor Pro build — not the production site.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | Homepage — all 12 sections from the Phase 1 brief |
| `styles.css` | Design system + layout. Tokens at the top mirror Elementor Global Colours/Fonts |
| `script.js` | Sticky-header shadow + mobile menu + NL/EN toggle (Elementor + Weglot handle these in production) |
| `assets/img/` | Logo, salon banner, category tiles + SVG placeholders for photo slots |
| `assets/img/brands/` | Real manufacturer logos (from the `logo images/` source folder) |
| `assets/sprite.html` | Source of the inlined SVG icon set |
| `assets/make-placeholders.sh` | Regenerates the placeholder images |

## Known asset fixes for launch

- **`brands/purina.png` and `brands/whiskas.jpeg`** have a checkerboard
  transparency pattern flattened into the file — replace with clean
  transparent PNGs (they show faint grey squares on the white tiles).
- **Category tiles** (`cat-*.svg`) are generic icon artwork. Swap for real
  product/animal photography when available — same filenames, no markup change.
- **`salon-banner.png`** is Manon's Vachtatelier branding for the grooming
  section.

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
