import { test, expect } from '@playwright/test';

test.describe('JA Home', () => {
  test('loads homepage and has hero title', async ({ page }) => {
    await page.goto('/ja/');
    const hero = page.locator('h1').first();
    await expect(hero).toBeVisible();
  });

  test('pricing cards count matches data (haircuts page)', async ({ page }) => {
    await page.goto('/ja/services/haircuts');
    const cards = page.locator('h3');
    await expect(cards).toHaveCount(3);
  });
});
