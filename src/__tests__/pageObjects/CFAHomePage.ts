import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class CFAHomePage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.chick-fil-a.com/";

   // Locators
   cfaLogo: By = By.css('.icon-logo-desktop.logo');
   findRestaurant: By = By.xpath('//button[@data-element="findRestaurant"]');
   signInLink: By = By.xpath('//form[@id="toolbar-menu-signin"]/button');
   orderFoodBtn: By = By.xpath('//a[@href="/order"]');
   searchBtn: By = By.css('.icon-search-off');
   searchField: By = By.name("query")
   searchClose: By = By.css('.icon-close');
   glutenFree: By = By.xpath('(//h3[contains(text(),"gluten-free")])[1]')
   giftCard: By = By.xpath('(//h3[contains(text(),"gift card")])[1]')


    constructor(driver: WebDriver) {
        super(driver);
    }
}