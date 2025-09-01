import { test, expect } from '@playwright/test';

test('theme toggle persists', async ({ page }) => {
  await page.goto('/en/');
  const button = page.getByRole('button', { name: /toggle theme/i });
  await expect(button).toBeVisible();

  const initial = await page.evaluate(() => document.documentElement.classList.contains('dark'));

  // Try up to 2 clicks in case first occurs pre-hydration.
  let toggled = false;
  for (let i = 0; i < 2 && !toggled; i++) {
    await button.click();
    try {
      await page.waitForFunction(prev => document.documentElement.classList.contains('dark') !== prev, initial, { timeout: 4000 });
      toggled = true;
    } catch {
      // retry loop
    }
  }

  expect(toggled).toBeTruthy();
  const afterToggle = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  await page.reload();
  await page.waitForFunction(expected => document.documentElement.classList.contains('dark') === expected, afterToggle, { timeout: 4000 });
  const afterReload = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  expect(afterReload).toBe(afterToggle);
});
