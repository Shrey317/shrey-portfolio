import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const base = process.env.TEST_BASE_URL || "http://localhost:3000";
const output = "artifacts/browser";
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.TEST_BROWSER_CHANNEL
    ? { channel: process.env.TEST_BROWSER_CHANNEL }
    : {}),
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error" && !message.text().includes("404"))
    errors.push(message.text());
});
const results = [];
const paths = [
  "/",
  "/projects",
  "/about",
  "/contact",
  "/resume",
  "/missing-page",
];
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
try {
  for (const path of paths) {
    const response = await page.goto(base + path, { waitUntil: "networkidle" });
    assert.equal(response.status(), path === "/missing-page" ? 404 : 200, path);
    assert.equal(await page.locator("h1").count(), 1, `One H1: ${path}`);
    assert.equal(await page.locator("main").count(), 1);
    if (path !== "/missing-page") {
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute("href"),
        "https://shrey-portfolio-black.vercel.app" + (path === "/" ? "" : path),
      );
      assert.equal(
        await page.locator('meta[property="og:url"]').getAttribute("content"),
        "https://shrey-portfolio-black.vercel.app" + (path === "/" ? "" : path),
      );
    }
    for (const width of widths) {
      await page.setViewportSize({ width, height: 950 });
      await page.waitForTimeout(50);
      const dimensions = await page.evaluate(() => ({
        window: window.innerWidth,
        content: document.documentElement.scrollWidth,
      }));
      assert.ok(
        dimensions.content <= width,
        `Overflow ${path} at ${width}: ${dimensions.content}`,
      );
    }
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      await fs.writeFile(
        `${output}/axe-${path.replaceAll("/", "") || "home"}-${width}.json`,
        JSON.stringify(axe.violations, null, 2),
      );
      assert.equal(
        axe.violations.length,
        0,
        `Accessibility ${path} at ${width}: ${axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join("; ")}`).join(", ")}`,
      );
      if (path !== "/missing-page")
        await page.screenshot({
          path: `${output}/${path.replaceAll("/", "") || "home"}-${width}.png`,
          fullPage: true,
        });
    }
    results.push(
      `${path}: HTTP, headings, responsive widths, metadata and axe checks passed`,
    );
  }
  await page.goto(base + "/projects");
  await page.getByRole("button", { name: "Backend", exact: true }).click();
  assert.equal(await page.locator(".project-card").count(), 2);
  assert.equal(
    await page
      .getByRole("button", { name: "Backend", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Full-Stack", exact: true }).focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(".project-card").count(), 1);
  await page.locator("summary").focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator("details[open]").count(), 1);
  await page.getByRole("button", { name: "All", exact: true }).click();
  assert.equal(await page.locator(".project-card").count(), 4);
  await page.getByRole("button", { name: "Business Systems", exact: true }).click();
  assert.equal(await page.locator(".project-card").count(), 1);
  assert.match(await page.locator(".project-card h3").innerText(), /Nita Travels/);
  assert.equal(await page.getByRole("link", { name: "Live demo" }).getAttribute("href"), "https://nita-travels.vercel.app/");
  assert.equal(await page.getByRole("link", { name: "Source code" }).getAttribute("href"), "https://github.com/Shrey317/Nita-Travels");
  results.push(
    "Project filtering and build notes work with mouse and keyboard",
  );

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  assert.ok(await page.getByRole("dialog").isVisible());
  const mobileAxe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  assert.equal(
    mobileAxe.violations.length,
    0,
    JSON.stringify(mobileAxe.violations.map((v) => v.id)),
  );
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    assert.ok(
      await page.evaluate(
        () => !!document.activeElement.closest('[role="dialog"]'),
      ),
    );
  }
  assert.equal(
    await page.evaluate(() => getComputedStyle(document.body).overflow),
    "hidden",
  );
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Open menu",
  );
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Skills" })
    .click();
  await page.waitForURL(base + "/#skills");
  assert.equal(await page.getByRole("dialog").count(), 0);
  assert.notEqual(
    await page.evaluate(() => getComputedStyle(document.body).overflow),
    "hidden",
  );
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  assert.equal(await page.getByRole("dialog").count(), 0);
  results.push(
    "Mobile menu: focus trap, Escape, focus return, scroll lock, anchors and resize passed",
  );

  await page.goto(base + "/contact");
  await page.getByRole("button", { name: "Open email app" }).click();
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 4);
  assert.equal(await page.evaluate(() => document.activeElement.id), "name");
  await page.getByLabel("Your name").fill("Hiring Team");
  await page.getByLabel("Email address").fill("team@example.com");
  await page.locator("#subject").fill("Graduate role & team");
  await page
    .getByLabel("Your message")
    .fill("We would like to discuss a graduate development role.");
  // Observe mailto navigation; do not send email or open an external email app.
  const session = await context.newCDPSession(page);
  await session.send("Page.enable");
  let mailto = "";
  session.on("Page.frameRequestedNavigation", (event) => {
    if (event.url.startsWith("mailto:")) mailto = event.url;
  });
  await page.getByRole("button", { name: "Open email app" }).click();
  await page.waitForTimeout(200);
  assert.ok(mailto.startsWith("mailto:drash1731@gmail.com?subject="));
  assert.ok(decodeURIComponent(mailto).includes("Graduate role & team"));
  assert.match(
    await page.locator(".form-status").innerText(),
    /Nothing has been sent yet/,
  );
  assert.equal(await page.getByLabel("Your name").inputValue(), "Hiring Team");
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copy email address" }).click();
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    "drash1731@gmail.com",
  );
  results.push(
    "Form validation, mailto encoding, honest status, retained draft and clipboard passed",
  );

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base);
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  assert.equal(
    await page
      .locator(".hero-copy")
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  results.push(
    "Reduced motion: smooth scrolling and entrance animation disabled",
  );

  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJs.newPage();
  await staticPage.goto(base);
  assert.ok(
    await staticPage.getByRole("heading", { name: "Shrey Patel." }).isVisible(),
  );
  assert.ok(
    await staticPage
      .getByRole("link", { name: "View My Projects" })
      .isVisible(),
  );
  results.push(
    "Essential hero and project content remain visible without JavaScript",
  );
  await noJs.close();

  await page.goto(base + "/resume");
  const downloads = page.locator("a[download]");
  if (await downloads.count()) {
    const href = await downloads.first().getAttribute("href");
    const pdf = await context.request.get(base + href);
    assert.equal(pdf.status(), 200);
    assert.ok((await pdf.body()).subarray(0, 5).toString() === "%PDF-");
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      downloads.first().click(),
    ]);
    assert.equal(download.suggestedFilename(), "Shrey_Patel_CV.pdf");
    results.push("CV PDF and browser download passed");
  } else {
    assert.ok(
      await page.getByRole("link", { name: "Request CV by email" }).isVisible(),
    );
    assert.equal(
      (await context.request.get(base + "/resume.pdf")).status(),
      404,
    );
    results.push(
      "CV fallback passed; unrelated PDF is not publicly served. Correct CV still needed.",
    );
  }
  for (const asset of [
    "/og-image.png",
    "/icon.svg",
    "/robots.txt",
    "/sitemap.xml",
  ])
    assert.equal(
      (await context.request.get(base + asset)).status(),
      200,
      asset,
    );
  for (const photo of ["/portfolio-img.jpeg", "/portfolio%20image.png"])
    assert.equal((await context.request.get(base + photo)).status(), 404);
  const links = new Set();
  for (const path of paths.slice(0, -1)) {
    await page.goto(base + path);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((elements) => elements.map((e) => e.getAttribute("href"))))
      if (href.startsWith("/")) links.add(href);
  }
  for (const href of links) {
    const url = new URL(href, base);
    assert.equal(
      (await context.request.get(url.origin + url.pathname)).status(),
      200,
      href,
    );
    if (url.hash) {
      await page.goto(url.origin + url.pathname);
      assert.equal(await page.locator(url.hash).count(), 1, href);
    }
  }
  results.push(
    "All rendered internal links, anchors and metadata assets resolve; portraits return 404",
  );
  assert.deepEqual(errors, [], "Browser errors");
  results.push("No unexpected browser console or hydration errors");
  await fs.writeFile(
    `${output}/results.json`,
    JSON.stringify(
      { date: new Date().toISOString(), widths, results },
      null,
      2,
    ),
  );
  console.log(results.join("\n"));
} finally {
  await browser.close();
}
