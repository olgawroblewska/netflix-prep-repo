import { test, expect } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";
import { SignInPage } from "../pages/sign-in.page";
import { UserMenu } from "../components/user-menu.component";

test.describe("Login tests ", () => {
  
    test.beforeEach( async ({ page }) => {
        await page.goto("/");
    })
    test("Successfull login", async ({ page }) => {

    // Arrange
    const login = '';
    const password = '';
    // Act
    const mainMenu = new MainMenu(page);
    await mainMenu.signInClick();
    const signIn = new SignInPage(page);
    await signIn.loginToNetflix(login, password);
    // Assert
    const userMenu = new UserMenu(page);
    await expect(userMenu.isUserLoggedIn).toBeTruthy();

  });
});
