import { Locator, Page } from "@playwright/test";

export class DownloadModal {
    allButton: Locator;
    downloadImageButton: Locator;
    downloadModalHeader: Locator;
    constructor(private page: Page) {
        this.allButton = this.page.getByRole('button', { name: 'All' })
        this.downloadImageButton = this.page.getByTestId('top10-download-btn')
        this.downloadModalHeader = this.page.getByRole('heading', { name: 'Downloads' })
    }
    
}