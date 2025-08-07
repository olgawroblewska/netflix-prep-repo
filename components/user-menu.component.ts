import { Locator, Page } from "@playwright/test";

export class UserMenu {
  profileDropDownButton: Locator;
  switchProfileLink: Locator;
  goToNetflixLink: Locator;
  signOutOfNetflixLink: Locator;
  constructor(private page: Page) {
    this.profileDropDownButton = page.getByTestId("#profile-dropdown-cb");
    this.switchProfileLink = page.locator('[data-uia="profile-link"]');
    this.goToNetflixLink = page.locator('[data-uia="netflix-link"]');
    this.signOutOfNetflixLink = page.locator('[data-uia="signout"]');
  }
  async isUserLoggedIn(): Promise<boolean> {
    return await this.profileDropDownButton.isVisible();
  }
  async goToProfiles() {
    await this.profileDropDownButton.click();
  }
  async signOutOfNetflix() {
    await this.signOutOfNetflixLink.click();
  }
}
