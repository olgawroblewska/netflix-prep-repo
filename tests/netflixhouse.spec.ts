import test, { expect } from "@playwright/test";
import { centerOn, scrollToSection } from "../utils/scroll.util";
import { NetflixHouse } from "../pages/netflix-house.page";

test.describe("Netflix house page testing", () => {
  let nh: NetflixHouse;

  test.beforeEach(async ({ page }) => {
    nh = new NetflixHouse(page);
  });
  test("Should go to intro section", async ({ page }) => {
    // act
    await page.goto("https://www.netflixhouse.com/");
    //scrollToSection(nh.introSection);
    centerOn(page, nh.introSection);
    await expect(page).toHaveURL("https://www.netflixhouse.com/welcome/");
  });
});
