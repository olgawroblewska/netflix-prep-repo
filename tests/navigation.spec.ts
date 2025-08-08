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
  });

  test("Navigation - home page - unlogged user", async ({ page }) => {
    await page.waitForLoadState();

    // Arrange

    // Act
    await cookieBanner.clickRejectCookiesButton;
    await mainMenu.searchButton.isVisible();
    // Assert 

    });

  test("Navigation Top10 - unlogged user", async ({page}) => {

  });

  test("should display all main menu items for not signed-in user'", async ({ page}) => {
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
  })
  });
