import test, { Cookie, expect } from "@playwright/test";
import { DownloadModal } from "../components/downloadModal.component";
import { Top10 } from "../pages/top-10.page";
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { TIMEOUT } from "node:dns";
import { CookieBanner } from "../components/cookie-banner.component";

test.describe("Top 10 page testing", () => {
  let downloadModal: DownloadModal;
  let cookie: CookieBanner;
  let top10Page: Top10;

  test.beforeEach( async ({ page }) => {
      await page.goto('https://www.netflix.com/tudum/top10');
      downloadModal = new DownloadModal(page);
      top10Page = new Top10(page); 
      cookie = new CookieBanner(page);
      await cookie.clickButtonOnCookieBanner(cookie.closeButton);
  });
  test("Should download square images for All Global, Movie | English Top 10 ", async ({ page }) => {
      // Arrange
      const downloadPromise = page.waitForEvent('download');
      // Act
      await top10Page.downloadButton.click({timeout: 500});
      await downloadModal.$.downloadModalHeader.isVisible();
      await downloadModal.$.downloadImageButton.click();
      await downloadModal.$.allButton.click();
      
      const download = await downloadPromise;

      // Katalog docelowy w Repo
      const dir = path.resolve(process.cwd(), 'downloads');
      await fs.mkdir(dir, {recursive: true});

      const filename = download.suggestedFilename();
      console.log(filename);
      const savedPath = path.join(dir, filename);

      await download.saveAs(savedPath);
      // Assert
      expect(await download.failure()).toBeNull();
      const stat = await fs.stat(savedPath);
      expect(stat.size).toBeGreaterThan(0);
  });
});
