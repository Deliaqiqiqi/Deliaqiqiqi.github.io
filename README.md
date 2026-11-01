# Jiang Yaqi — creative portfolio

Responsive media and culture portfolio built from Yaqi's supplied Canva/PPT design and notes. React, TypeScript, Vite, Tailwind CSS, custom CSS and Motion. All photography, project graphics and the CV come from the supplied materials. Display fonts are self-hosted with their OFL licenses.

## Development

```sh
npm ci
npm run dev
npm run build
```

## GitHub Pages, after design review

The workflow is manual (`workflow_dispatch`), so adding this implementation does not publish it automatically. The repository owner selects **Settings → Pages → Build and deployment → GitHub Actions**, then runs **Deploy portfolio to GitHub Pages** from the main branch when ready.

Asset URLs use Vite's relative base and `import.meta.env.BASE_URL`, so the site supports the current `/yaqijiang.github.io/` project path and a future root Pages repository. `VITE_BASE_PATH` may override the base if needed. Identity Story uses a hash view, so refresh/back work without a server rewrite.

Content, image names and external links are centralized in `src/data/content.ts`. Page sections live in `src/sections/`, navigation in `src/components/Header.tsx`, routing in `src/App.tsx`, and visual tokens/layouts in `src/styles/global.css`. See `docs/DESIGN_SPEC.md` and `docs/INTERACTIONS.md` for the source requirements and the two content uncertainties.

## Scope

Includes cover animation, drag-to-discover identity story, CV, experience disclosures, education, depth carousel, WeChat article links, social flip cards, a photography accordion/swipe gallery with fullscreen viewing, and a scroll-linked contact composition. Keyboard alternatives and reduced-motion support are included. No paid React Bits Pro code is used.

A ready-built static copy is also included in `dist/` in the delivered archive. To preview it without installing dependencies, run `python3 -m http.server 8080 --directory dist` and visit `http://localhost:8080`.
