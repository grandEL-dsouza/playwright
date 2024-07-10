import { test, expect } from '@playwright/test';

test.describe('Test cases', () => {
  test.describe.configure({ mode: 'serial' });

  let page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 360, height: 640 },
      isMobile: true,
      deviceScaleFactor: 2,
      hasTouch: true,
    });
    page = await context.newPage();
    await page.goto('https://playwright.dev/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Validate playwright page', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});
