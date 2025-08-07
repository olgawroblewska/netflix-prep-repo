import { Locator, Page } from "@playwright/test";

export class SignInPage {
    loginTitleText: Locator;
    userLoginInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    signInCodeButton: Locator;
    forgotPasswordLink: Locator;
    rememberMeCheckbox: Locator;
    signUpNowLink: Locator;
    constructor(private page: Page) {
        this.loginTitleText = page.getByRole('heading', {name: "Sign In"});
        this.userLoginInput = page.locator('[data-uia="field-userLoginId"]');
        this.passwordInput = page.locator('[data-uia="field-password"]');
        this.loginButton = page.locator('[data-uia="sign-in-button"]');
        this.signInCodeButton = page.locator(('[data-uia="use-code-button"]'));
        this.forgotPasswordLink = page.locator('data-uia="forgot-password-link"]');
        this.rememberMeCheckbox = page.locator('data-uia="remember-me-checkbox"]');
    }
async loginToNetflix(username: string, password: string): Promise<void> {
    await this.userLoginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
}