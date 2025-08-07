import { test, expect } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";
import { SignInPage } from "../pages/sign-in.page";
import { UserMenu } from "../components/user-menu.component";

test.describe("Login tests ", () => {
    let mainMenu: MainMenu;
    let signInPage: SignInPage;
  
    test.beforeEach( async ({ page }) => {
        await page.goto("/");
        
        
        mainMenu = new MainMenu(page);
        await mainMenu.signInClick();
        signInPage = new SignInPage(page);
    })
    test("Successfull login", async ({ page }) => {

    // Arrange
    const login = 'olga.wroblewska@proton.me';
    const password = '!';
    // Act
    await signInPage.loginToNetflix(login, password);
    // Assert
    const userMenu = new UserMenu(page);
    await expect(userMenu.isUserLoggedIn()).resolves.toBeTruthy();
    console.log(await userMenu.isUserLoggedIn());

  });

  test("Incorrect login", async ({ page }) => {
    //Arrange
    const incorrectLogin = 'asdasd';
    const password = 'RandomPassword';
    //Act
    await signInPage.loginToNetflix(incorrectLogin, password);
    //Assert

    
  })
});
