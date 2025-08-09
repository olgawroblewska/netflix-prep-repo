import test, { expect } from "@playwright/test";
import { Footer } from "../components/footer.component";
import { scrollToPageBottom, isAtTop } from "../utils/page-utils";

test.describe('Footer navigation testing ', () => {
    let footerNavigation: Footer;
    test.beforeEach( async ({ page }) => {

        await page.goto('/');
        footerNavigation = new Footer(page);
        // scroll down to the page bottom
        await scrollToPageBottom(page);
    });
    test("Back to top page", async ({ page }) => {
        await footerNavigation.backToTop();
        await page.waitForLoadState();
        // assert
       await expect.poll(async () => await isAtTop(page), { timeout: 3000 }).toBe(true);
    });

    test("test description1", async ({ page }) => {});

    test("test description2", async ({ page }) => {});

});