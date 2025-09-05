import { test, expect } from '@playwright/test';

test.describe('Structured Data', () => {
  test('LocalBusiness JSON-LD present on EN home', async ({ page }) => {
    await page.goto('/en/');
    const handle = page.locator('script[type="application/ld+json"]').first();
    await expect(handle).toBeVisible();
    const raw = await handle.textContent();
    expect(raw).toContain('Barbershop');
    expect(raw).toContain('BBnB');
  });
});