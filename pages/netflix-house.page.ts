import { expect, Locator, Page } from "@playwright/test";
import { TIMEOUT } from "dns";

export class NetflixHouse {
    introSection: Locator; 
    signUpSection: Locator;
    constructor(private page: Page) {
        const mainScroll = page.locator('#mainScroll');
        this.introSection = page.locator('.text__container__GFOGn.intro > .text__wrapper__YsPpq');
        this.signUpSection = mainScroll.locator('.text__container__GFOGn.signUp');

    }
    async scrollToSection(section: Locator) {
        await section.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(500);
        await expect(section).toBeInViewport();
    }
}