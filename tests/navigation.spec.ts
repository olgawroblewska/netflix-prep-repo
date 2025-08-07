import { test, expect } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";
import { CookieBanner } from "../components/cookie-banner.component";

test.describe("tudum navigation tests", () => {
  let mainMenu: MainMenu;
  let cookieBanner: CookieBanner;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    mainMenu = new MainMenu(page);
    cookieBanner = new CookieBanner(page);
  });

  test.only("Navigation - home page - unlogged user", async ({ page }) => {
    await page.waitForLoadState();

    // Arrange

    // Act
    await cookieBanner.clickRejectCookiesButton;
    await mainMenu.searchButton.isVisible();
    // Assert 

    });
  });
