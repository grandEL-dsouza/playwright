import { test, Page, expect } from "@playwright/test";

test.describe("Test cases", async () => {
  test.describe.configure({ mode: "serial" });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://playwright.dev/");
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Validate playwright page", async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});
