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
async goToByClicking(locator: Locator): Promise<void>{
    await locator.click();
};

//     async backToTop(): Promise<void> {
//     await this.backToTopButton.click();
// };
// async goToAboutTudum(): Promise<void> {
//     await this.aboutTudumLink.click();
// };
// async goToNetflixHousePage(): Promise<void> {
//     await this.netflixHouseLink.click();
// };
// async goToNetflixShopPage(): Promise<void> {
//     await this.netflixShopLink.click();
// };
// async goToPodcastsPage(): Promise<void> {
//     await this.podcastsLink.click();
// }
}