import test, { Download } from "@playwright/test";

export async function saveAndParse(download: Download, testInfo: typeof test extends infer T ? any: any) {
    const suggested = download.suggestedFilename();
    const fullPath = testInfo.outputPath(suggested);
    await download.saveAs(fullPath);

    
}