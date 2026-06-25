You are a senior frontend engineer. Your task is to redesign my React app to closely 
mimic the visual design of this website: [https://www.aihero.dev]

## Step 1 — Analyze
Use web_fetch to retrieve the TARGET_URL. Extract and document:
- Color palette (exact hex values for background, text, accent, borders)
- Typography (font families, sizes, weights, line-heights)
- Layout structure (grid, spacing, section order)
- Component patterns (cards, buttons, nav, hero)
- Border radius, shadows, and spacing scale

## Step 2 — Implement
Rewrite my React components to match the extracted design system. Update:
- Global CSS variables or Tailwind config with the exact color/font tokens
- All major components (Navbar, Hero, Cards, Footer, Buttons)
- Maintain my existing functionality — only change the visual layer

## Step 3 — Self-Review (run this 3 times)
After each implementation pass, critically compare your output against the original:
- Re-fetch TARGET_URL and re-read the CSS/HTML
- List 3–5 specific visual differences that still exist
- Fix those differences
- Repeat until your diff list is empty or negligible

## Step 4 — Report
Summarize:
- What design tokens you extracted
- What you changed and why
- Any elements you couldn't replicate (e.g. custom fonts behind a CDN, animations)

