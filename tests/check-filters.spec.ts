import { test, expect } from '@playwright/test';
import { ParfumPage } from '../page-objects/parfum';
import { LandingPage } from '../page-objects/landing';
import { off } from 'process';
import { describe } from 'node:test';

const incomeData = [
  { 
    category : "sale",
    values : {
      brand: "Acca Kappa",
      product: "Parfum",
      presenceFor: null,
      forWhom: "Männlich"
    }
  },
  {
    category : "new",
    values : {
      brand: null,
      product: "Parfum",
      presenceFor: null,
      forWhom: "Männlich"
    }
  },
  // some filter disappear after some time, presenceFor for ex.
  // {
  //   category : "limited",
  //   values : {
  //     brand: "Acca Kappa",
  //     product: "Parfum",
  //     presenceFor: "Dankeschön",
  //     forWhom: "Männlich"
  //   }
  // },

]

describe("Parfum", async () => {
    for (const {category, values} of incomeData){
      test(`List the products based on filters - category ${category}`, async ({ page }) => {
        const parfumPage: ParfumPage = new ParfumPage(page);
        const landingPage: LandingPage = new LandingPage(page);
        await page.goto('/de');
        await landingPage.acceptCookies.click()
        await landingPage.parfumTab.click();
      
        // Expect a title "to contain" a substring.
        await parfumPage.setProduct(values.product);
        await parfumPage.setBrand(values.brand);
        await parfumPage.setPresentFor(values.presenceFor);
        await parfumPage.setForWhom(values.forWhom);
      });
    }
})

