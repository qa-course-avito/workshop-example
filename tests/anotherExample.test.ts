import {MainPage} from "../pages/mainPage";
import {test} from "@playwright/test";

test("Делаем разные штуки", async ({ page }) => {
    //arrange
    const mainPage = new MainPage(page);

    //act
    await mainPage.openMainPage();
    //await mainPage.clickOnFirstAdv();
    //await mainPage.fillSearchInput("СОБАКА")
    //await mainPage.openAboutPage()

    //assert
    //await mainPage.openMainPage();
    //await mainPage.waitForOpen();
});
