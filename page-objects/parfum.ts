import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ParfumPage extends BasePage{
  readonly productSelect: Locator;
  readonly filterSearch: Locator;
  readonly checkboxBase: Locator;
  readonly brandSelect: Locator;
  readonly brandSearchField: Locator;
  readonly forWhomSelect: Locator;
  readonly presentForSelect: Locator;


  constructor(page: Page){
    super(page);
    this.productSelect = page.locator("//div[@data-testid='classificationClassName']")
    this.checkboxBase = page.locator(`//div[@class='rc-scrollbars-view']/a`);
    this.filterSearch = page.locator("//input[@name='facet-search']");
    this.brandSelect = page.locator("//div[@data-testid='brand']");
    this.brandSearchField = page.locator("//input[@name='facet-search']");
    this.forWhomSelect = page.locator("//div[@data-testid='gender']");
    this.presentForSelect = page.locator("//div[@data-testid='Geschenk für']")

  }

  setProduct = async (productName: any) => {
    // need some time before switch to new select
    await this.page.waitForTimeout(500);
    if(productName){
      await this.productSelect.click()
      await this.filterSearch.pressSequentially(productName);
      await this.checkboxBase.locator(`//div[text()='${productName}']`).click()
  
      await this.checkboxBase.locator(`//div[text()='${productName}']/../../div[contains(@class, 'selected')]`).isVisible();
      await this.productSelect.click()
    }
  }

  setBrand = async (brandName: any) => {
     // need some time before switch to new select
    await this.page.waitForTimeout(500);
    if(brandName){
      await this.brandSelect.click();
      await this.filterSearch.pressSequentially(brandName);
      await this.checkboxBase.locator(`//div[text()='${brandName}']`).click()
  
      await this.checkboxBase.locator(`//div[text()='${brandName}']/../../div[contains(@class, 'selected')]`).isVisible();
      await this.brandSelect.click();
    }
  }

  setForWhom = async (forWhom: any) => {
     // need some time before switch to new select
    await this.page.waitForTimeout(500);
    if(forWhom){
      await this.forWhomSelect.click();
      await this.checkboxBase.locator(`//div[text()='${forWhom}']`).click()
  
      await this.checkboxBase.locator(`//div[text()='${forWhom}']/../../div[contains(@class, 'selected')]`).isVisible();
      await this.forWhomSelect.click();
    }
  }

  setPresentFor = async (presentFor: any) => {
     // need some time before switch to new select
    await this.page.waitForTimeout(500);
    if(presentFor){
      await this.presentForSelect.click();
      await this.filterSearch.pressSequentially(presentFor);
      await this.checkboxBase.locator(`//div[text()='${presentFor}']`).click()
  
      await this.checkboxBase.locator(`//div[text()='${presentFor}']/../../div[contains(@class, 'selected')]`).isVisible();
      await this.presentForSelect.click();
    }
  }
}
