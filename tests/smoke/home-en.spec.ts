import { test, expect } from '@playwright/test';

test.describe('EN Home', () => {
  test('loads homepage and shows a non-empty hero title', async ({ page }) => {
    await page.goto('/en/');
    const hero = page.locator('h1').first();
    await expect(hero).toBeVisible();
    await expect(hero).not.toHaveText('');
  });

  test('booking button visible (href optional when env missing)', async ({ page }) => {
    await page.goto('/en/');
    const btn = page.locator('a', { hasText: 'Book on Google Calendar' });
    await expect(btn).toBeVisible();
    const href = await btn.getAttribute('href');
    // If env vars configured it should be http(s); otherwise allow placeholder or empty.
    if (href) {
      expect(href.startsWith('http')).toBeTruthy();
    }
  });

  test('pricing cards count matches data (haircuts page)', async ({ page }) => {
    await page.goto('/en/services/haircuts');
    const cards = page.locator('h3'); // each PriceCard has an h3
    await expect(cards).toHaveCount(3); // from pricing.ts haircuts items length
  });
});
