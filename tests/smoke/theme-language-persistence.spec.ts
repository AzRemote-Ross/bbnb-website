import { test, expect } from '@playwright/test';

test('theme persists across language switches', async ({ page }) => {
  // Start on English page
  await page.goto('/en/');
  
  const themeButton = page.getByRole('button', { name: /toggle theme/i });
  const languageButton = page.getByRole('button', { name: /switch language/i });
  
  await expect(themeButton).toBeVisible();
  await expect(languageButton).toBeVisible();

  // Switch to dark theme
  await themeButton.click();
  
  // Wait for theme to be applied
  await page.waitForFunction(() => document.documentElement.classList.contains('dark'), { timeout: 2000 });
  
  // Verify dark theme is active
  let isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  expect(isDark).toBe(true);
  
  // Switch to Japanese
  await languageButton.click();
  
  // Wait for navigation to complete
  await page.waitForURL('/ja/');
  
  // Wait for theme to be restored from localStorage
  await page.waitForFunction(() => document.documentElement.classList.contains('dark'), { timeout: 4000 });
  
  // Verify theme persisted across language switch
  isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  expect(isDark).toBe(true);
  
  // Verify the theme button shows correct state
  const themeButtonAfterSwitch = page.getByRole('button', { name: /toggle theme/i });
  await expect(themeButtonAfterSwitch).toContainText('🌙');
  
  // Switch back to English to test persistence in both directions
  const languageButtonJa = page.getByRole('button', { name: /switch language/i });
  await languageButtonJa.click();
  
  // Wait for navigation back to English
  await page.waitForURL('/en/');
  
  // Wait for theme to be restored again
  await page.waitForFunction(() => document.documentElement.classList.contains('dark'), { timeout: 4000 });
  
  // Verify theme still persists
  isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  expect(isDark).toBe(true);
  
  // Verify the theme button still shows correct state
  const themeButtonBackToEn = page.getByRole('button', { name: /toggle theme/i });
  await expect(themeButtonBackToEn).toContainText('🌙');
});