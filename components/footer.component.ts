import { Locator, Page } from "@playwright/test";

class Footer {
    backToTopButton: Locator;
    aboutTudumLink: Locator;
    netflixHouseLink: Locator;
    netflixShopLink: Locator;
    podcastsLink: Locator;
    constructor(private page: Page) {
        this.backToTopButton = page.locator('');
    }
}