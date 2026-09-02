import { existsSync } from 'node:fs';
import { chromium } from 'playwright-core';

const baseUrl = process.env.QA_BASE_URL || 'http://localhost:3000/';
const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);
const executablePath = chromeCandidates.find((candidate) =>
  existsSync(candidate),
);
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];

if (!executablePath) {
  throw new Error('Set CHROME_PATH to an installed Chrome or Edge executable.');
}

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath });
  const errors = [];
  const viewportResults = [];

  for (const width of widths) {
    const page = await browser.newPage({
      viewport: { width, height: width < 768 ? 844 : 1000 },
      deviceScaleFactor: 1,
      isMobile: width < 768,
      hasTouch: width < 768,
    });
    page.on('console', (message) => {
      if (message.type() === 'error')
        errors.push(`${width}px: ${message.text()}`);
    });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    viewportResults.push(
      await page.evaluate(() => ({
        width: innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
      })),
    );
    if (width === 390) await page.screenshot({ path: 'qa-mobile.png' });
    if (width === 1440) await page.screenshot({ path: 'qa-desktop.png' });
    await page.close();
  }

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobile.goto(baseUrl, { waitUntil: 'networkidle' });
  await mobile.getByRole('button', { name: 'Open navigation menu' }).click();
  const mobileNavVisible = await mobile.locator('.mobile-nav').isVisible();
  await mobile.locator('.mobile-nav a[href="#projects"]').click();
  await mobile.getByRole('button', { name: 'View details' }).first().click();
  const dialogVisible = await mobile.getByRole('dialog').isVisible();
  await mobile.keyboard.press('Escape');
  await mobile.getByRole('button', { name: 'Health Technology' }).click();
  const filteredCards = await mobile.locator('.project-card').count();
  const formValidWhenEmpty = await mobile
    .locator('.contact-form')
    .evaluate((form) => form.checkValidity());
  const unsafeExternalLinks = await mobile
    .locator('a[target="_blank"]')
    .evaluateAll((links) =>
      links
        .map((link) => ({
          href: link.getAttribute('href'),
          rel: link.getAttribute('rel'),
        }))
        .filter(
          (link) =>
            !link.rel?.includes('noopener') ||
            !link.rel?.includes('noreferrer'),
        ),
    );

  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await desktop.goto(baseUrl, { waitUntil: 'networkidle' });
  const metadata = await desktop.evaluate(() => ({
    title: document.title,
    sections: document.querySelectorAll('main section').length,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    ogImage: document.querySelector('meta[property="og:image"]')?.content,
  }));
  await desktop.locator('#experience').scrollIntoViewIfNeeded();
  await desktop.waitForTimeout(700);
  await desktop.screenshot({ path: 'qa-experience.png' });

  const result = {
    viewportResults,
    horizontalOverflow: viewportResults.filter(
      (item) => item.documentWidth > item.width || item.bodyWidth > item.width,
    ),
    mobileNavVisible,
    dialogVisible,
    filteredCards,
    formValidWhenEmpty,
    unsafeExternalLinks,
    metadata,
    consoleErrors: errors,
  };
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
  if (
    result.horizontalOverflow.length ||
    !mobileNavVisible ||
    !dialogVisible ||
    filteredCards !== 1 ||
    formValidWhenEmpty ||
    unsafeExternalLinks.length ||
    errors.length
  ) {
    process.exitCode = 1;
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
