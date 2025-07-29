import { test, expect } from '@playwright/test';


test.describe('tudum navigation tests', () => {

test('Open tudum page as unlogged user', async ({ page }) => {

    await page.goto('https://www.netflix.com/tudum');
    await page.getByLabel('Main Menu').getByRole('link', { name: 'Home' }).click();
    await page.getByText('Spotlight').click();
    await page.getByText('Latest News').click();
    await page.getByText('Videos', { exact: true }).click();
    await page.getByRole('heading', { name: 'Shows' }).locator('span').click();
    await page.getByText('Popular Now').click();
    await page.getByText('Netflix Movies', { exact: true }).click();
    await page.getByRole('heading', { name: 'Explore More' }).locator('span').click();
    await page.getByRole('button', { name: 'Back To Top' }).click();
    await page.getByRole('link', { name: 'Tudum - by Netflix' }).click({
      button: 'right'
    });
  });


});