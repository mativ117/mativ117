# Mathieu Orfila

A personal space for my projects, experiments, and interests. Built with curiosity, shaped by small improvements.

## Website

The French personal showcase lives in `docs/`. It is a static website with no build dependencies.

### Publish with GitHub Pages

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, then **main** and **/docs**. Save.

Expected address after publication: https://mativ117.github.io/mativ117/

### Add a project

Edit `docs/projects.js` (including illustration alt text and caption). Include a short, plain-language description, its actual development status, a GitHub link, and a demo link only when available. Update this showcase when adding a new project. Run `node build.cjs` after editing to regenerate the static project presentations in `docs/index.html`. Commit both the data and regenerated HTML.

### Art direction

Midnight blue, warm amber light, quiet orbital paths. Subtle references to science fiction, racing trajectories, basketball geometry and 117. Gradual improvement guides the copy. No franchise logos or characters.

### Local preview

Run `python -m http.server 8000 --directory docs`, then open http://localhost:8000.

Google Fonts are optional; system fonts work without them. No analytics, accounts or automatic GitHub synchronization.

### Page structure and illustrations

Short introduction → three project presentations → personal interests. Each project has one description and its current status. No filters for the current three projects. Project presentations are generated at development time and remain readable without JavaScript.

Original SVG illustrations in `docs/assets/` depict document conversion, a conceptual basketball play, and an imagined exploration landscape. They are illustrations, not application screenshots. The game illustration is explicitly labeled as an interpretation.
