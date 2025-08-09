import { test, expect } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";
import { CookieBanner } from "../components/cookie-banner.component";
import { HomePage } from "../pages/home.page";
import { Footer } from "../components/footer.component";

test.describe("tudum navigation tests", () => {
  let mainMenu: MainMenu;
  let cookieBanner: CookieBanner;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    mainMenu = new MainMenu(page);
    cookieBanner = new CookieBanner(page);
    homePage = new HomePage(page);
    await cookieBanner.closeCookieBanner();
  });

  test("Open tudum should be at home page", async ({ page }) => {
    // Assert
    await expect(mainMenu.searchButton).toBeVisible();
    await expect(mainMenu.homeNavLink).toHaveAttribute("aria-current", "true");
  });

  test("should display all main menu items for not signed-in user'", async ({
    page,
  }) => {
    await page.waitForLoadState();
    await expect(mainMenu.signInButton).toBeVisible();
    await expect(mainMenu.homeButton).toBeVisible();
    await expect(mainMenu.homeNavLink).toBeVisible();
    await expect(mainMenu.top10NavLink).toBeVisible();
    await expect(mainMenu.trendingNavLink).toBeVisible();
    await expect(mainMenu.whatToWatchNavLink).toBeVisible();
    await expect(mainMenu.showsNavLink).toBeVisible();
    await expect(mainMenu.moviesNavLink).toBeVisible();
    await expect(mainMenu.podcastsNavLink).toBeVisible();
    await expect(mainMenu.shopNavLink).toBeVisible();
    await expect(mainMenu.searchButton).toBeVisible();
  });

  test("Should display Top 10 page for quest", async ({ page }) => {
    // Arrange
    const expectedUrl = "https://www.netflix.com/tudum/top10";
    //Act
    await mainMenu.goTo(mainMenu.top10NavLink);
    const currentUrl = page.url();
    // Assert
    await expect(currentUrl).toMatch(expectedUrl);
    await expect(mainMenu.top10NavLink).toHaveAttribute("aria-current", "true");
    await expect(mainMenu.homeNavLink).not.toHaveAttribute("aria-current", "true");
    console.log(`Current url is: ${currentUrl}`);
  });
  test("Should open trending page for quest", async ({ page }) => {
    // arrange
    const expectedUrl = 'https://www.netflix.com/tudum/topics/trending';
    //Act
    await mainMenu.goTo(mainMenu.trendingNavLink);
    const currentUrl = page.url();
    // Assert
    await expect(currentUrl).toMatch(expectedUrl);
    await expect(mainMenu.trendingNavLink).toHaveAttribute("aria-current", "true");
    await expect(mainMenu.homeNavLink).not.toHaveAttribute("aria-current", "true");
    console.log(`Current url is: ${currentUrl}`);
  });
  test("should go to 'What to watch' page for quest", async ({page}) => {
     // arrange
     const expectedUrl = 'https://www.netflix.com/tudum/topics/what-to-watch';
     //Act
     await mainMenu.goTo(mainMenu.whatToWatchNavLink);
     const currentUrl = page.url();
     // Assert
     await expect(currentUrl).toMatch(expectedUrl);
     await expect(mainMenu.whatToWatchNavLink).toHaveAttribute("aria-current", "true");
     await expect(mainMenu.homeNavLink).not.toHaveAttribute("aria-current", "true");
     console.log(`Current url is: ${currentUrl}`);
  });
  test("Should go to Shows page for quest", async ({page}) => {
    // arrange
    const expectedUrl = 'https://www.netflix.com/tudum/topics/tv-shows';
    //Act
    await mainMenu.goTo(mainMenu.showsNavLink);
    const currentUrl = page.url();
    // Assert
    await expect(currentUrl).toMatch(expectedUrl);
    await expect(mainMenu.showsNavLink).toHaveAttribute("aria-current", "true");
    await expect(mainMenu.homeNavLink).not.toHaveAttribute("aria-current", "true");
    console.log(`Current url is: ${currentUrl}`);
  })
});
