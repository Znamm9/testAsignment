import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LandingPage extends BasePage{

  readonly parfumTab: Locator;
  readonly acceptCookies: Locator;

  constructor(page: Page){
    super(page);

    this.acceptCookies = page.locator(`//button[contains(@class, 'accept-all')]`)
    this.parfumTab = page.locator(`//div[contains(@class, 'carousel')]//a[contains(@href, 'parfum')]`);
  }


}