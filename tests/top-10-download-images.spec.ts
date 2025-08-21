import test, { Cookie, expect } from "@playwright/test";
import { DownloadModal } from "../components/downloadModal.component";
import { Top10 } from "../pages/top-10.page";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { TIMEOUT } from "node:dns";
import { CookieBanner } from "../components/cookie-banner.component";
import { imageSize } from "image-size";

test.describe("Top 10 page testingdownload images", () => {
  let downloadModal: DownloadModal;
  let cookie: CookieBanner;
  let top10Page: Top10;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.netflix.com/tudum/top10");
    downloadModal = new DownloadModal(page);
    top10Page = new Top10(page);
    cookie = new CookieBanner(page);
    await cookie.clickButtonOnCookieBanner(cookie.closeButton);
    await top10Page.downloadButton.click();
    await expect(downloadModal.$.downloadModalHeader).toBeVisible();
  });
  test("Should download square images for All Global, Movie | English Top 10 ", async ({
    page,
  }) => {
    // Arrange
    const downloadPromise = page.waitForEvent("download");
    // Act
    await downloadModal.$.allButton.click();
    await downloadModal.$.downloadImageButton.click();

    const download = await downloadPromise;

    // Katalog docelowy w Repo
    const dir = path.resolve(process.cwd(), "downloads");
    await fs.mkdir(dir, { recursive: true });

    const filename = download.suggestedFilename();
    console.log(filename);
    const savedPath = path.join(dir, filename);

    await download.saveAs(savedPath);

    const buffer1 = await fs.readFile(savedPath);
    const { width, height } = imageSize(buffer1);
    console.log(`Image size: ${width}x${height}`);
    // Assert

    expect(await download.failure()).toBeNull();
    const stat = await fs.stat(savedPath);
    expect(stat.size).toBeGreaterThan(0);
    expect(filename).toContain("square");
    expect(width).toBe(width);
  });

  test("Should download vertical images for All Global, Movie | Engllish Top 10", async ({
    page,
  }) => {
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");

    await downloadModal.$.verticalButton.click();

    const [response] = await Promise.all([
      page.waitForResponse(async (r) => {
        if (!r.url().includes("/graphql")) return false;
        try {
          const json = await r.json();
          return !!json?.data?.tudumTop10Artwork?.url;
        } catch {
          return false;
        }
      }),
      downloadModal.$.allButton.click(),
    ]);

    // get JSON from response
    const json = await response.json();
    const imageUrl = json.data.tudumTop10Artwork.url;
    console.log("Vertical image url: ", imageUrl);

    const [imgResponse] = await Promise.all([
      page.waitForResponse(
        (r) =>
          r.url() === imageUrl &&
          r.request().method() === "GET" &&
          r.status() === 200
      ),
      downloadModal.$.downloadImageButton.click(),
    ]);
    const buffer = await imgResponse.body();

    // 4. Zapisz lokalnie
    const dir = path.resolve(process.cwd(), "downloads");
    await fs.mkdir(dir, { recursive: true });
    const filename = `top10_${stamp}_vertical.jpg`;
    console.log("Filename is: ", filename);
    const savedPath = path.join(dir, filename);
    await fs.writeFile(savedPath, buffer);

    const buffer1 = await fs.readFile(savedPath);
    const { width, height } = imageSize(buffer1);
    console.log(`Image size: ${width}x${height}`);

    // 5. Asercje
    expect(height).toBeGreaterThan(width);
    const stat = await fs.stat(savedPath);
    expect(stat.size).toBeGreaterThan(0);
  });
});
