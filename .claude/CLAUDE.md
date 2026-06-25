# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build
npm test         # Run tests (React Testing Library / Jest)
```

No linting command is configured. ESLint runs automatically via `react-scripts` during `start` and `build`.

## Architecture

This is a single-page React portfolio built with Create React App (no TypeScript, no routing library). The page is a vertical stack of full-width sections with smooth-scroll navigation.

**Data layer** — all content (profile, projects, experience, skills) lives in [src/resume-data.js](src/resume-data.js) as a single exported object. To update any content on the site, edit only that file.

**Component structure** — [src/App.jsx](src/App.jsx) is the root; it imports from `resume-data.js` and composes the page:

- `Nav` — fixed top bar; uses `document.getElementById` + `scrollIntoView` for smooth-scroll. Collapses to a hamburger on mobile via CSS `.active` toggle.
- `Hero` — full-viewport header with a background image; shows name, summary, CTA buttons, and language icon cards. Language icons are hardcoded in the component (not driven by `resume-data.js`).
- `Section` — generic wrapper that adds the `section` + optional class, renders `id`, `title`, `subtitle`, and `children`.
- `ProjectCard` / `ExperienceCard` — pure presentational cards; all data comes through props spread from the `resume-data.js` arrays.
- `Contact` — uses `mailto:` links; no backend or email service. The form's submit handler builds a `mailto:` URL and sets `window.location.href`.

**Styling** — single global CSS file [src/index.css](src/index.css). CSS custom properties (`--bg`, `--card`, `--accent`, etc.) are defined in `:root`. Responsive breakpoints: `≤768px` (mobile/phone), `≥640px` (2-column project grid), `≥1024px` (3-column project grid).

**Static assets** — project screenshots and language icons are in [public/assets/](public/assets/). Image paths are referenced as `/assets/filename.png` (root-relative, served from `public/`).

## Key conventions

- All site content changes go in `src/resume-data.js` only — components are generic.
- The Education section exists in `resume-data.js` but is commented out in `App.jsx`.
- `ProjectCard` links accept `{ label, href }` objects; commented-out entries show how to add a live demo link.
- No state management library — `Nav` uses local `useState` for the mobile menu; `Contact` uses local `useState` for form status.
