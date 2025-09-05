import { test, expect } from '@playwright/test';

test.describe('Sitemap & Robots', () => {
  test('sitemap contains localized service pages', async ({ page }) => {
    const res = await page.request.get('/sitemap.xml');
    expect(res.ok()).toBeTruthy();
    const xml = await res.text();
    expect(xml).toMatch(/\/en\/services\//);
    expect(xml).toMatch(/\/ja\/services\//);
    expect(xml.match(/<url>/g)?.length).toBeGreaterThan(5);
  });

  test('robots references sitemap', async ({ page }) => {
    const res = await page.request.get('/robots.txt');
    expect(res.ok()).toBeTruthy();
    const txt = await res.text();
    expect(txt).toMatch(/Sitemap:\s+http/);
  });
});