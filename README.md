# Mathieu Orfila

A personal space for my projects, experiments, and interests. Built with curiosity, shaped by small improvements.

## Website

The French and English personal showcase lives in `docs/`, with English at `docs/en/`. It is a static website with no build dependencies.

### Publish with GitHub Pages

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, then **main** and **/docs**. Save.

Expected address after publication: https://mativ117.github.io/mativ117/

### Add a project

Edit `docs/projects.js` (including illustration alt text and caption). Include a short, plain-language description, its actual development status, a GitHub link, and a demo link only when available. Update this showcase when adding a new project. Add matching English content to `docs/projects.en.json`. Run `node build.cjs` after editing to regenerate the static project presentations in `docs/index.html`. Commit both the data and regenerated HTML.

### Art direction

Midnight blue, warm amber light, quiet orbital paths. Subtle references to science fiction, racing trajectories, basketball geometry and 117. Gradual improvement guides the copy. No franchise logos or characters.

### Local preview

Run `python -m http.server 8000 --directory docs`, then open http://localhost:8000.

Google Fonts are optional; system fonts work without them. No analytics, accounts or automatic GitHub synchronization.

### Page structure and illustrations

Short introduction → project presentations → experimentation approach. Each project has one description and its current status. No filters for the current projects. Project presentations are generated at development time and remain readable without JavaScript.

Original SVG illustrations in `docs/assets/` depict document conversion, a conceptual basketball play, and an imagined exploration landscape. They are illustrations, not application screenshots. The game illustration is explicitly labeled as an interpretation.

### Languages

French at `/mativ117/`, English at `/mativ117/en/`. The FR / EN links work without JavaScript. Each page declares its language, canonical URL and alternate languages. No automatic redirect: visitors control their choice. Both pages include translated accessibility labels and illustration captions; English illustrations have localized lettering. Project names remain unchanged. Browser translation can provide other languages, but the site does not claim reviewed translations beyond French and English.

### Keep project goals current

Whenever a featured project's goal, scope or availability changes, review its current README and design documentation. Update its concise, goal-focused description and actual status in both `docs/projects.js` and `docs/projects.en.json`, then run `node build.cjs` and commit both generated pages. Do not present planned features as delivered. This editorial rule is recorded in `AGENTS.md`; it is not automatic synchronization.

Project descriptions were checked against the source READMEs on 2026-11-15. Mathieu's stated interests include basketball, F1, music and science fiction; do not invent more specific personal preferences.

### Processarium

Processarium (`mativ117/processarium_ia`) is included in both languages with a workshop illustration. Its description follows its README: an animated educational workshop about roles, handoffs, parallel tasks and human decisions; it does not execute AI agents. Direct application link: https://mativ117.github.io/processarium_ia/. The Pages publishing workflow was verified successful when adding this project.

### Visual composition

Personal introduction led by “Create. Explore. Refine.” and a discreet mo. monogram and a layered orbital illustration; quick navigation to four projects; large alternating image/text project panels on desktop and a single column on mobile; a warm, light experimentation section creates a visual pause. Existing project illustrations and accurate CoachOS half-court geometry are preserved. External-link icons are inline SVGs. No client-side JavaScript is required. Reduced-motion preferences are respected.

Browser verification covered French and English at 375, 768 and 1440 px: no horizontal overflow, four loaded illustrations, eight project links in application/source order, active language, and no JavaScript errors. Desktop and mobile screenshots were inspected during implementation.




### Project status

Only three shared status codes are used: `building` (En chantier / Work in progress), `try` (À essayer / Try it out), `ready` (Prêt à utiliser / Ready to use). Display labels are centralized in `docs/statuses.json`. Calque and CoachOS currently use `building`; Processarium and Les Royaumes de l’Éclipse use `try`. `ready` requires evidence that the main use is validated. The build rejects unknown codes and generates both language badges. No explanatory status section is displayed on the website, per Mathieu's preference.

### Experimentation section

The former personal interests section is replaced with “Un terrain d’expérimentation” / “A space to experiment”. It describes testing ideas, learning by building, and refining projects. Personal interest tags and biographical references are removed from this section. The header link is “La démarche” / “The approach”.

### Orbital animation control

The hero has a visible French/English Animation on/off button. With no saved choice, it follows the system reduced-motion preference. Explicit user choice overrides that default and is stored under `mo:motion` in localStorage, shared between language pages. Storage failure is handled; the button still works for the current page. JavaScript is needed only for this enhancement; without it the backdrop stays static and project navigation works. Versioned stylesheet and script URLs prevent older cached files from hiding the update. Browser checks verified FR/EN mobile/desktop, both toggle states, explicit override of reduced motion, persistence across reload, particle movement and no horizontal overflow.
