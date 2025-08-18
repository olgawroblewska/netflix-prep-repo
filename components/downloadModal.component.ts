import { Download, Locator, Page } from "@playwright/test";

export class DownloadModal { 
    $ : {  
        allButton: Locator;
        downloadImageButton: Locator;
        downloadModalHeader: Locator;
        squareButton: Locator;
        verticalButton: Locator;
        imagesTab: Locator;
        listsTab: Locator;
        globalListsTsvFileDownloadButton: Locator;
        globalListsExcelFIleDownloadButton: Locator;
        countryListsTsvFileDownloadButton: Locator;
        countryListsExcelFileDownloadButton: Locator;
        mostPopularListsTsvFileDownloadButton: Locator;
        mostPopularListsExcelFileDownloadButton: Locator;
    };

    constructor(private page: Page) {
        this.$ = {
        allButton: page.getByRole('button', { name: 'All' }),
        downloadImageButton: page.getByTestId('top10-download-btn'),
        downloadModalHeader: page.getByRole('heading', { name: 'Downloads' }),
        squareButton: page.getByRole('button', { name: 'Square' }),
        verticalButton: page.getByRole('button', { name: 'Vertical'}),
        imagesTab:page.getByRole('button', { name: 'Images' }),
        listsTab: page.getByRole('button', { name: 'Lists' }),
        globalListsTsvFileDownloadButton: page.getByTestId('top10-download-global-alltime-tsv'),
        globalListsExcelFIleDownloadButton: page.getByTestId('top10-download-global-alltime-xlsx'),
        countryListsTsvFileDownloadButton: page.getByTestId('top10-download-global-weekly-tsv'),
        countryListsExcelFileDownloadButton: page.getByTestId('top10-download-global-weekly-xlsx'),
        mostPopularListsTsvFileDownloadButton: page.getByTestId('top10-download-country-weekly-tsv'),
        mostPopularListsExcelFileDownloadButton: page.getByTestId('top10-download-country-weekly-xlsx'),
        }
    }
    // Function to click download and return Download Object 
    async triggerDownload (btn: Locator): Promise<Download> {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            btn.click(),
        ])
        return download;
    }
}