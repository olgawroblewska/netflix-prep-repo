import test from "@playwright/test";
import { Footer } from "../components/footer.component";

test.describe('Footer navigation testing ', () => {
    let footerNavigation: Footer;
    test.beforeEach( async ({ page }) => {

        await page.goto('/');
        footerNavigation = new Footer(page);
        // scroll down to the page bottom

    });

});