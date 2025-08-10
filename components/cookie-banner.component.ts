import { Locator, Page } from "@playwright/test";

export class CookieBanner {
    cookieBannerPopup: Locator;
    learnMoreButton: Locator;
    rejectButton: Locator;
    acceptButton: Locator;
    closeButton: Locator;
    constructor(private page: Page) {
        this.cookieBannerPopup = this.page.getByLabel('Privacy', { exact: true }).locator('div').filter({ hasText: 'Netflix and third parties use' }).nth(1);
        this.learnMoreButton = this.page.getByRole('button', { name: 'Learn more, Opens the' });
        this.rejectButton = this.page.getByRole('button', {name: 'Reject'});
        this.acceptButton = this.page.getByRole('button', {name: 'Accept'});
        this.closeButton = this.page.getByRole('button', {name: 'Close'});
    }
async clickAcceptCookiesButton() {
    if (await this.acceptButton.isVisible()) {
        await this.acceptButton.click();
    } 
}
async clickRejectCookiesButton() {
    if (await this.rejectButton.isVisible()){
        await this.rejectButton.click();
    }
}
async closeCookieBanner() {
    if (await this.closeButton.isVisible()) {  
        await this.closeButton.click();
    }
}
}