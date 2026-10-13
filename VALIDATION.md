# Verification record

Executed 13 October 2026 against the local Next.js production server. The public Vercel deployment was not changed.

## Build and code

- Strict TypeScript: `npm run typecheck` passed.
- ESLint: `npm run lint` passed with zero warnings after repairing the old lint command and matching the Next.js configuration version.
- Production build: `npm run build` passed; all pages prerender statically.
- `git diff --check` passed (Git reports only the workspace's existing LF/CRLF conversion notices).
- `npm audit --omit=dev`: **0 vulnerabilities** after applying a compatible PostCSS override.
- Full dependency audit: **5 high advisories remain in the development-only ESLint → fast-glob → micromatch → braces chain**. Registry's latest braces is 3.0.3 and no compatible upstream fix is available. Do not use `npm audit fix --force`: its suggested downgrade breaks Next lint-version alignment. This toolchain processes repository patterns, not visitor input.

## Browser suite

`TEST_BASE_URL=http://localhost:3100 TEST_BROWSER_CHANNEL=chrome npm run test:browser` passed using headless installed Google Chrome through Playwright.

- Home, Projects, About, Contact, Resume and Not Found checked at **320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px**: no horizontal overflow; expected HTTP status and one H1 per page.
- **12 axe scans** (six page states × desktop/mobile), WCAG 2 A/AA, 2.1 AA and 2.2 AA tags: **zero violations**. Open mobile dialog also scanned. This is automated evidence, not a certification of complete WCAG conformance.
- Category filters tested by click and keyboard; project build notes expand with Enter.
- Mobile menu tested for focus trapping, Escape dismissal, focus restoration, background scroll lock, anchor navigation, route closure and resize closure.
- Contact tested for blank-field errors and focus, valid composition, encoded subject/body, honest status and unchanged draft. The suite observes a mailto request; no email is sent and no external mail application is opened.
- Copy-email button writes the configured address to the browser clipboard; failure fallback exists.
- Reduced motion disables entrance animation and smooth scrolling. Essential content remains visible with JavaScript disabled.
- Every rendered internal link/anchor and SEO asset resolves. Portrait URLs and the unrelated PDF return 404.
- CV request fallback works; actual Shrey CV download remains untestable until his correct PDF is supplied. The same test automatically exercises downloads when the CV is enabled.
- No unexpected console errors, hydration errors or page exceptions.
- Desktop and mobile screenshots were visually reviewed for the hero, projects, About and contact layouts.

Machine-readable results: `artifacts/browser/results.json`. Per-page axe results and desktop/mobile screenshots are in the same ignored folder.

## Performance

Lighthouse was run against the production homepage with the mobile preset. The initial pass scored Performance 66, Accessibility 100, Best Practices 100 and SEO 100, with CLS 0. That finding prompted reduced animation JavaScript and font preloading. The final optimized mobile run scored **Performance 69, Accessibility 100, Best Practices 100 and SEO 100**. FCP: 1.8s; LCP: 3.2s; TBT: 920ms; CLS: 0; Speed Index: 4.0s. The mobile Performance 90+ and LCP <=2.5s targets were **not met** in this local measurement. Initial homepage JavaScript decreased from 142kB to 107kB (about 25%) by using lightweight Framer hooks instead of the full animation renderer. Fonts now preload locally, and the mono face uses a smaller static font. The remaining cost is chiefly Next/React startup and hydration under simulated mobile CPU/network conditions. Reports: `artifacts/lighthouse-mobile.json` and `artifacts/lighthouse-mobile-final.json`.

Lighthouse is a local simulated lab test; it does not measure field INP or prove deployed Core Web Vitals. Repeat after deployment using representative devices and networks.

## Content limits

See `CONTENT-NOTES.md`. The correct CV, exact Bachelor's qualification title, approved project screenshots, project provenance/completion status and public demo/repository URLs remain owner-supplied material. LinkedIn rejects automated requests with HTTP 999. The existing GitHub profile and production homepage return HTTP 200.


Desktop Lighthouse: Performance 95, Accessibility 100, Best Practices 100, SEO 100. LCP 0.9 s; TBT 130 ms; CLS 0. Report: artifacts/lighthouse-desktop-final.json.
