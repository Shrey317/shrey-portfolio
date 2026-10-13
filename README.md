# Shrey Patel — portfolio

A typography-led, dark-only portfolio built with Next.js 15 App Router, React, TypeScript, Tailwind CSS 4, Geist, Lucide and Framer Motion. Existing routes are retained.

## Run locally

```sh
npm ci
npm run dev
```

Production:

```sh
npm run typecheck
npm run lint
npm run build
npm run start
```

Use Node.js 22 LTS. No environment variables are required. The contact form intentionally composes an email in the visitor's mail application; it does not claim to deliver email.

## Browser verification

```sh
npx playwright install chromium
npm run build
npm run start
npm run test:browser
```

The browser suite defaults to `http://localhost:3000`. Set `TEST_BASE_URL` for another port and optionally `TEST_BROWSER_CHANNEL=chrome` to use installed Google Chrome. On PowerShell:

```powershell
$env:TEST_BASE_URL='http://localhost:3100'
$env:TEST_BROWSER_CHANNEL='chrome'
npm run test:browser
```

Checks cover all six page states at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px; axe WCAG A/AA scans at 390 and 1440px; filtering; expandable project notes; modal keyboard/focus handling; scroll locking; anchor navigation; contact validation and draft retention; clipboard; reduced motion; no-JavaScript content; CV fallback/download; internal links; metadata; removed portraits; and console errors. Reports and screenshots are written to ignored `artifacts/browser/`.

## Update content

- `lib/data.ts`: biography, employers, education, skills, projects, social URLs and CV configuration.
- `lib/types.ts`: typed project, experience and education records.
- `lib/metadata.ts`: consistent page-specific canonical, Open Graph and Twitter metadata.
- `app/globals.css`: semantic tokens, responsive layouts and reduced-motion styles.
- `public/og-image.svg`: editable source for the 1200×630 PNG social preview. Regenerate `public/og-image.png` after changing it.

Project illustrations are abstract CSS diagrams, explicitly labelled as concepts. There are no invented application screenshots, public demos, repository links or case-study claims. Native disclosure controls expose each project's documented functionality and contribution.

## CV download

The owner-supplied CV dated 14 October 2026 is served unchanged at `public/resume.pdf`. Downloads are enabled throughout the site with filename `Shrey_Patel_CV.pdf`; `/resume` includes an embedded preview and a direct-download fallback. The deployed file's SHA-256 matches the supplied source.

For future updates, replace that PDF and update `resume.updated` in `lib/data.ts` using a verified document revision date. The browser suite tests the real PDF endpoint and download filename. The earlier unrelated PDF remains privately archived and is excluded from deployment.

## Deploy to Vercel

Use the existing project, Next.js framework preset, `npm ci`, and `npm run build`. All routes prerender statically. No database or email service configuration is needed for the current fallback.

The canonical origin is `https://shrey-portfolio-black.vercel.app`, the user-specified live origin verified to return HTTP 200. If a permanent custom domain replaces it, update `siteConfig.url`; sitemap, robots and metadata derive from it. This task has not published a deployment.

Before a public release, review the remaining content gaps in [CONTENT-NOTES.md](CONTENT-NOTES.md). See [VALIDATION.md](VALIDATION.md) for executed checks and known limits.

## Implementation notes

Shared additions: `ResumeLink` keeps every CV CTA honest and consistent; `SocialLinks` centralizes accessible social navigation; `pageMetadata` provides route-specific metadata. Existing `AnimatedSection`, `SectionHeader`, `ProjectCard`, `SkillBadge` and `TechTag` were refined and reused.

Static content stays in Server Components. Client JavaScript is limited to navigation, project filters, the contact form and small motion wrappers. Radix Dialog supplies modal semantics, focus trapping/restoration, Escape dismissal and body scroll locking. Essential content is visible before hydration and without JavaScript.

Tailwind 4 integration follows [the official PostCSS setup](https://tailwindcss.com/docs/installation/using-postcss). ESLint now runs through its CLI with the version-matched Next configuration; [Next.js ESLint documentation](https://nextjs.org/docs/app/api-reference/config/eslint).

## Main files changed

| Area | Files |
| --- | --- |
| Theme, typography, responsive layouts | `app/globals.css`, `app/layout.tsx` |
| Hero and project presentation | `components/sections/Hero.tsx`, `FeaturedProjects.tsx`, `ProjectsContent.tsx`, `components/shared/ProjectCard.tsx` |
| Skills, experience and education | `components/sections/SkillGrid.tsx`, `ExperienceTimeline.tsx`, `EducationSection.tsx` |
| Photo-free About and contact | `components/sections/AboutContent.tsx`, `ContactForm.tsx`, `ContactSection.tsx` |
| Accessible navigation and footer | `components/layout/Navbar.tsx`, `Footer.tsx` |
| Pages and metadata | All five `app/**/page.tsx` routes, `app/not-found.tsx`, `app/sitemap.ts`, new `app/robots.ts`, `app/icon.svg`, `lib/metadata.ts` |
| Central content | `lib/data.ts`, `lib/types.ts` |
| Reusable additions | `components/shared/ResumeLink.tsx`, `SocialLinks.tsx` |
| Build and verification | `package.json`, `package-lock.json`, `postcss.config.mjs`, `eslint.config.mjs`, `scripts/verify-browser.mjs` |

The incompatible Tailwind 3 configuration, theme provider, unused helpers and redundant dependencies were removed. Both portrait files were deleted after their references were removed.
