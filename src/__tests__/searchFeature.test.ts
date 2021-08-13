import { By, WebDriver, Capabilities, Builder } from "selenium-webdriver"
import { CFAHomePage } from "./pageObjects/CFAHomePage"

const chromedriver = require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const home = new CFAHomePage(driver);
const searchTerms: Array<string> = ["gluten free", "gift cards"];

describe("Testing search feature", () => {
    beforeEach(async () => {
        await home.navigate(home.url);
        await home.maxWindow();
    });
test("website", async () => {
    expect(await home.driver.getCurrentUrl()).toBe(home.url);
});
test("search for nutritional facts", async () => {
   await home.click(home.searchBtn);
    await home.sendKeys(home.searchField,`${searchTerms[0]}\n`);
  expect(await home.getText(home.glutenFree)).toContain("gluten")
});
test("gift card search", async () => {
    await home.click(home.searchBtn);
    await home.sendKeys(home.searchField, `${searchTerms[1]}\n`);
    expect(await home.getText(home.giftCard)).toContain("gift card");
});
afterAll(async () => {
    await driver.quit()
});
});

