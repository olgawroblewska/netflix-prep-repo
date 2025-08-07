import { Locator, Page } from "@playwright/test";

export class CookieBanner {
    cookieBanner: Locator;
    learnMoreButton: Locator;
    rejectButton: Locator;
    acceptButton: Locator;
    constructor(private page: Page) {
        this.cookieBanner = page.locator('');
        this.learnMoreButton = page.getByTestId('#onetrust-pc-btn-handler');
        this.rejectButton = page.getByTestId('#onetrust-reject-all-handler');
        this.acceptButton = page.getByTestId('#onetrust-accept-btn-handler');
    }

async clickAcceptCookiesButton(page) {
    await page.acceptButton.click();
}
async clickRejectCookiesButton(page) {
    await page.rejectButton.click();
}
}