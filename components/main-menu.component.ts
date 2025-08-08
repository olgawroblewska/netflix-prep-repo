import { Locator, Page } from "@playwright/test";
import { UserMenu } from "./user-menu.component";

export class MainMenu {
  signInButton: Locator;
  homeButton: Locator;
  homeNavLink: Locator;
  top10NavLink: Locator;
  trendingNavLink: Locator;
  whatToWatchNavLink: Locator;
  showsNavLink: Locator;
  moviesNavLink: Locator;
  podcastsNavLink: Locator;
  shopNavLink: Locator;
  searchButton: Locator;

  userMenu: UserMenu;
  constructor(private page: Page) {
    this.signInButton = this.page.locator('[data-uia="profile-link"]');
    this.homeButton = this.page.locator('[data-uia="home-button"]');
    this.homeNavLink = this.page.getByLabel('Main Menu').getByRole('link', { name: 'Home' });
    this.top10NavLink = this.page.getByRole('link', { name: 'Top 10', exact: true });
    this.trendingNavLink = this.page.getByRole("link", { name: "Trending" });
    this.whatToWatchNavLink = this.page.getByRole("link", { name: "What to Watch" });
    this.showsNavLink = this.page.getByRole('link', { name: 'Shows', exact: true });
    this.moviesNavLink = this.page.getByRole("link", { name: "Movies" , exact: true});
    this.podcastsNavLink = this.page.getByLabel('Main Menu').getByRole('link', { name: 'Podcasts' });
    this.shopNavLink = this.page.getByRole("link", { name: "Shop", exact: true });
    this.searchButton = this.page.getByRole('button', { name: 'Search' });
  }

  async signInClick() {
    await this.signInButton.click();
  }

  async goHome() {
    await this.homeButton.click();
  }

  async signInToTudum() {
    await this.signInClick();
  }
  async isUserSignedIn(): Promise<boolean> {
    return await this.userMenu.profileDropDownButton.isVisible();
  }
}
