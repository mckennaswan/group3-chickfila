import { By, WebDriver, Capabilities, Builder } from "selenium-webdriver"
import { CFAHomePage } from "./pageObjects/CFAHomePage"

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const home = new CFAHomePage(driver);
const searchTerms = ["nutrition", "gift cards"];
const searchRes = [By.xpath('//span[contains(text(),"Nutrition and Allergens")]')]

describe("Testing search feature", () => {
    beforeAll(async () => {
        await home.navigate(home.url);
        await home.maxWindow();
    });
test("website", async () => {
    expect(await home.driver.getCurrentUrl).toBe(home.url);
});
test("search for nutritional facts", async () => {
    await home.getText(searchTerms["nutrition"]);
    await home.checkIfVisible(searchRes["gluten free"]);
    expect(await home.getText(searchRes["nutrition"])).toContain("gluten free")
});
test("gift card search", async () => {
    await home.getText(searchTerms["giftcards"]);
    await home.checkIfVisible(searchRes["giftcards"]);
    expect(await home.getText(searchRes["giftcards"])).toContain("gift cards");
});
afterAll(async () => {
    await driver.quit
});
});

