import {MainPage} from "../pages/mainPage";
import {test} from "@playwright/test";

test("Открытие страницы Мои объявления", async ({ page }) => {
    //arrange
    const mainPage = new MainPage(page);

    //act
    await mainPage.openMainPage();

    //assert
    await mainPage.waitForOpen();
});
