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
    this.signInButton = page.getByRole("button", { name: "Sign In" });
    this.homeButton = page.locator('[data-uia="home-button"]');
    this.homeNavLink = page.getByRole("link", { name: "Home" });
    this.top10NavLink = page.getByRole("link", { name: "Top 10" });
    this.trendingNavLink = page.getByRole("link", { name: "Trending" });
    this.whatToWatchNavLink = page.getByRole("link", { name: "What to Watch" });
    this.showsNavLink = page.getByRole("link", { name: "Shows" });
    this.moviesNavLink = page.getByRole("link", { name: "Movies" });
    this.podcastsNavLink = page.getByRole("link", { name: "Podcasts" });
    this.shopNavLink = page.getByRole("link", { name: "Shop" });
    this.searchButton = page.locator('[data-uia="search-button"]');
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
  async isUserSignedIn(): Promise<boolean>{
    return await this.userMenu.profileDropDownButton.isVisible();
  }
}
