import test, { expect } from "@playwright/test";
import { CookieBanner } from "../components/cookie-banner.component";

test.describe("Testing cookies banner actions", () => {
  let cookieBanner: CookieBanner;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    cookieBanner = new CookieBanner(page);
  });
  test("User accepts cookies", async ({ page }) => {
    // act
    await cookieBanner.clickButtonOnCookieBanner(cookieBanner.acceptButton);
    //assert
    await expect(cookieBanner.cookieBannerPopup).toBeHidden();
  });
  test("User rejects cookies", async ({ page }) => {
    // act
    await cookieBanner.clickButtonOnCookieBanner(cookieBanner.rejectButton);
    //assert
    await expect(cookieBanner.cookieBannerPopup).toBeHidden();
  });
  test("User closing cookie banner", async ({ page }) => {
    //act
    await cookieBanner.clickButtonOnCookieBanner(cookieBanner.closeButton);
    //assert
    await expect(cookieBanner.cookieBannerPopup).toBeHidden();
  })
});
