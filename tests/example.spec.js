// @ts-check
import { test, expect } from '@playwright/test';



test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(1000)
});





  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(1000)

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
 
});

test('get started linkkk', async ({ page }) => {

=

    await page.getByRole('link', { name: 'Get started' }).click();
 

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(1000)

});test('get started linkk', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(1000)

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});
);test('get started linkk', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(1000)

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});

test('get started linkk', async ({ page }) => {


  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(1000)

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(1000)
});




