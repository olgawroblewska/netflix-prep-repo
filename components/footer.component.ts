import { Locator, Page } from "@playwright/test";

export class Footer {
    backToTopButton: Locator;
    aboutTudumLink: Locator;
    netflixHouseLink: Locator;
    netflixShopLink: Locator;
    podcastsLink: Locator;
    constructor(private page: Page) {
        this.backToTopButton = this.page.getByRole('button', { name: 'Back To Top' });
        this.aboutTudumLink = this.page.getByRole('link', {name: "About Tudum"});
        this.netflixHouseLink = this.page.getByRole('link', {name: "Netflix House"});
        this.netflixShopLink = this.page.getByRole('link', {name: "Netflix Shop"});
        this.podcastsLink = this.page.getByRole('contentinfo').getByRole('link', { name: 'Podcasts' });
    }
async backToTop(): Promise<void> {
    await this.backToTopButton.click();
};
async goToAboutTudum(): Promise<void> {
    await this.aboutTudumLink.click();
}
}