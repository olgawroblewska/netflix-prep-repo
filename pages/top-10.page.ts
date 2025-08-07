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
    this.selectCountryDropdownList = this.page.locator(
      '[data-uia="top10-country-select"]'
    );
    this.selectCategoryDropdownList = this.page.locator(
      '[data-uia="top10-category-select-selected"]'
    );
    this.downloadButton = this.page.getByRole("button", { name: "Downloads" });
    this.globalTop10MoviesSection = this.page.locator(
      '[data-uia="top-10-cards"]'
    );
    this.globalTop10MoviesHeader = this.page.getByRole("heading", {
      name: "Global Top 10 Movies",
    });
    this.top10FiltersWeekDropdownList = this.page.locator(
      'data-uia="top10-filters-week-select-selected"]'
    );
    this.top10MoviesOverviewHeader = this.page.getByRole('heading', {name: 'Top 10 Movies overview'});
    this.top10MoviesOverviewSection = this.page.getByTestId('top10-table');
  }
  async downloadTop10Movies(): Promise<void> {
    await this.downloadButton.click();
  }
}
