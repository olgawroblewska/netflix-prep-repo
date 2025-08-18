import { Locator, Page } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";

export class Top10 { 
  selectCountryDropdownList: Locator;
  selectCategoryDropdownList: Locator;
  downloadButton: Locator;
  globalTop10MoviesSection: Locator;
  globalTop10MoviesHeader: Locator;
  top10FiltersWeekDropdownList: Locator;
  top10MoviesOverviewHeader: Locator;
  top10MoviesOverviewSection: Locator;
  catchTheLatestHeader: Locator;
  catchTheLatestSection: Locator;

  mainMenu: MainMenu;
  constructor(private page: Page) {
    this.selectCountryDropdownList = this.page
      .getByRole("combobox")
      .filter({ hasText: "Global" });
    this.selectCategoryDropdownList = this.page
      .getByRole("combobox")
      .filter({ hasText: "Movies | English" });
    this.downloadButton = this.page.getByRole("button", { name: "Downloads" });
    this.globalTop10MoviesSection = this.page
      .locator("section")
      .filter({ hasText: "7/28/25 - 8/3/25 7/28/25 - 8/" });
    // this.globalTop10MoviesHeader = this.page.getByRole("heading", {
    //   name: "Global Top 10 Movies",
    // });
    this.globalTop10MoviesHeader = this.page.getByText("Global Top 10 Movies");
    this.top10FiltersWeekDropdownList = this.page.locator(
      'data-uia="top10-filters-week-select-selected"]'
    );
    this.top10MoviesOverviewHeader = this.page.getByRole("heading", {
      name: "Top 10 Movies overview",
    });
    this.top10MoviesOverviewSection = this.page.getByTestId("top10-table");
  }
  async openDownloadModal(): Promise<void> {
    await this.downloadButton.click();
  }
}
