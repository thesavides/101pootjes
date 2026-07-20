#!/usr/bin/env bash
# Generates labelled SVG placeholders for every photo slot in the prototype.
# Replace the files in assets/img/ with real WebP photography before launch —
# keep the same filenames and nothing in the markup needs to change.
set -euo pipefail
cd "$(dirname "$0")/img"

make() { # name width height bg fg label
  cat > "$1.svg" <<SVG
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $2 $3" width="$2" height="$3" role="img" aria-label="$6">
  <rect width="$2" height="$3" fill="$4"/>
  <g fill="$5" opacity=".55" transform="translate($(($2/2)) $(($3/2 - 22)))">
    <ellipse cx="-21" cy="-13" rx="8" ry="11"/><ellipse cx="-7" cy="-20" rx="8" ry="11"/>
    <ellipse cx="8" cy="-20" rx="8" ry="11"/><ellipse cx="22" cy="-13" rx="8" ry="11"/>
    <path d="M0 -6c13 0 23 9 23 19 0 8-7 12-16 10-5-1-9-1-14 0-9 2-16-2-16-10 0-10 10-19 23-19z"/>
  </g>
  <text x="50%" y="$(($3/2 + 34))" text-anchor="middle" fill="$5" opacity=".8"
    font-family="Poppins,Inter,system-ui,sans-serif" font-size="15" font-weight="600">$6</text>
</svg>
SVG
}

# name            w    h    bg        fg        label
make hero        1200  800 "#dbe9cd" "#3f6b1c" "Hero — customer &amp; pets in store"
make owner        600  760 "#e6efdc" "#3f6b1c" "Owner portrait"
make salon       1000  700 "#e3edf6" "#2c5d7c" "Grooming salon"
make tip          800  520 "#e8f1dd" "#3f6b1c" "Pet tip photo"
make promo        700  520 "#fdf0e2" "#8a5a1c" "Promotion product shot"
make map         1000  700 "#eef1f4" "#5b6774" "Google Map embed"

for c in "dogs #f6e2cb #7a4d18" "cats #fbe3cc #8a4f18" "birds #fdf1cf #7d6410" \
         "fish #d9e9f7 #1d4f7c" "small-pets #e8e0f3 #4d3a7a" "food #ece7de #5c4a2e" \
         "health #dbeef1 #17565e" "accessories #f7dedf #7c2f36"; do
  set -- $c
  make "cat-$1" 480 480 "$2" "$3" "$(echo "$1" | tr '-' ' ')"
done

for i in 1 2 3; do make "event-$i" 200 200 "#e6efdc" "#3f6b1c" "Event $i"; done
for i in 1 2 3 4 5; do make "insta-$i" 400 400 "#eef1f4" "#5b6774" "Post $i"; done

echo "Placeholders written to $(pwd)"
