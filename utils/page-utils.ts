import { Page } from '@playwright/test';

/**
 * Scrolls the page to the very bottom 
 */
export async function scrollToPageBottom(page: Page): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
};

// no ending scrolling
export async function scrollToBottomUntilNoChange(page: Page, wait = 500): Promise<void> {
    let previousHeight = 0;
    while (true) {
      const currentHeight = await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
        return document.body.scrollHeight;
      });
  
      if (currentHeight === previousHeight) break;
      previousHeight = currentHeight;
      await page.waitForTimeout(wait);
    }
  }
