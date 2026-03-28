# Site Plan

## Page / Section Structure
- Sticky top bar with section anchors, theme toggle, and resume/contact CTA
- Hero with differentiated positioning statement, short supporting copy, key metrics, and quick links
- About with headshot, background, recruiting focus, education, and a concise personal summary
- Selected Work with 3 featured case study cards and modal / slide-over detail views
- Experience with timeline-style highlights for GoFi, VIEWS Lab, and Verizon
- Leadership & Activities with concise impact blurbs and awards
- Skills with grouped technical strengths optimized for recruiter scanning
- Contact with email, location, LinkedIn, GitHub, and closing call to action

## Component Architecture
- `App` for page composition and global modal/theme state
- `TopBar` for navigation, CTA, and theme toggle
- `HeroSection`, `AboutSection`, `WorkSection`, `ExperienceSection`, `LeadershipSection`, `SkillsSection`, `ContactSection`
- `SectionShell` shared layout wrapper for headings and spacing
- `ProjectModal` for featured work detail views
- `AmbientBackground` and small shared UI patterns for tags, cards, and section shells

## Content / Data Structure
- Centralized portfolio content in `src/data/portfolio.js`
- Arrays for navigation, featured projects, experience, leadership, skills, and contact links
- Rich project objects include summary, outcomes, stack, challenge, approach, and impact bullets for modal content
- Keep copy factual and concise; pull directly from `CONTENT_NOTES.md` where available

## Interaction Model
- One-page smooth scrolling with clear section anchors
- Featured work cards open an animated modal or slide-over with deeper case study detail
- Hover and scroll-reveal motion for cards, metrics, and section transitions
- Theme toggle persists user preference with local storage and respects system preference on first load

## Design System Direction
- Premium editorial feel with strong typography, generous whitespace, layered surfaces, and restrained gradients
- Visual emphasis on readability and hierarchy rather than dashboard-style density
- Light mode: warm paper background with deep ink text and muted blue-gold accents
- Dark mode: slate/navy surfaces with soft highlights and preserved contrast
- Rounded cards, subtle borders, soft shadows, and understated motion using Framer Motion

## GitHub Pages Deployment Approach
- Vite app configured for GitHub Pages compatibility
- Since this is a user site repo (`dhanishp.github.io`), set Vite `base` to `/`
- Build output to `dist/`
- Add `gh-pages` deploy script for project portability even though GitHub Pages can also publish from Actions
- Include SPA-safe deployment notes if routing ever expands, though current site remains a single page

## Migration Approach From Old Site
- Preserve and migrate the headshot asset and best factual content from the current `index.html`
- Replace the static HTML page entirely with Vite + React + Tailwind structure
- Keep content modular and data-driven so future updates happen mostly in one content file
- Avoid carrying over weak generic hero copy and outdated project items that are not in the new recruiting narrative
