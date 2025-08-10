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
        await footerNavigation.goToByClicking(footerNavigation.backToTopButton);
        await page.waitForLoadState();
        // assert
       await expect.poll(async () => await isAtTop(page), { timeout: 3000 }).toBe(true);
    });

    test("Should go to 'About Tudum' page", async ({ page }) => {
        // Arrange
        const expectedUrl = 'https://www.netflix.com/tudum/articles/about-tudum';
        // Act
        await footerNavigation.goToByClicking(footerNavigation.aboutTudumLink);
        const currentUrl = page.url();
        // assert
        await expect(expectedUrl).toEqual(currentUrl);
    });

    test("Should open 'Netflix House' page in the new tab", async ({ page }) => {
        // Arrange
        const expectedUrl = 'https://www.netflixhouse.com/';
        // Act
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            footerNavigation.goToByClicking(footerNavigation.netflixHouseLink),
        ]);
        const currentUrl = newPage.url();
        
        // assert
        await expect(currentUrl).toEqual(expectedUrl);
    });
    test("Should open 'Netflix shop' page in the new tab", async ({page}) => {
        // arrange
        const expectedUrl = 'https://www.netflix.shop/';
        // act
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            footerNavigation.goToByClicking(footerNavigation.netflixShopLink),
        ]);
        const currentUrl = newPage.url();
        // assert
        await expect(currentUrl).toEqual(expectedUrl);
    });
    test("Should go to 'Podcasts' page", async ({page}) => {
        // arrange
        const expectedUrl = 'https://www.netflix.com/tudum/podcasts';
        // act
        await footerNavigation.goToByClicking(footerNavigation.podcastsLink);
        const currentUrl = page.url();
        // assert
        await expect(currentUrl).toEqual(expectedUrl);
    });
});