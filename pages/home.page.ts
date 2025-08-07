import { Locator, Page } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";
export class HomePage {
  categoryHeroSection: Locator;
  homeFeedTopStoriesSection: Locator;
  spotlightSectionHeader: Locator;
  loginBanner: Locator;
  cardWithListItemsBanner: Locator;
  latestNewsSectionHeader: Locator;
  homeFeedPopularVideoBanner: Locator;
  videosSectionHeader: Locator;

  mainMenu: MainMenu;
  constructor(private page: Page) {
    this.categoryHeroSection = page.locator('[data-guid="category-hero"]');
    this.homeFeedTopStoriesSection = page.locator(
      '[data-guid="home-feed-top-stories"]'
    );
    this.spotlightSectionHeader = page.getByRole("heading", {
      name: "Spotlight",
    });
    this.loginBanner = page.locator('[data-guid="login-banner"]');
    this.cardWithListItemsBanner = page.locator(
      '[data-guid="card-with-list-items"]'
    );
    this.latestNewsSectionHeader = page.getByRole("heading", {
      name: "Latest News",
    });
    this.homeFeedPopularVideoBanner = page.locator('');
    this.videosSectionHeader = page.locator('');
    this.mainMenu = new MainMenu(this.page);
  }
}
