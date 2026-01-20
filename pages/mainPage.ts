import { Locator, Page, expect } from "@playwright/test";
import {BasePage} from "./basePage";

export class MainPage extends BasePage {
    protected pageName = "Главная страница";

    readonly header: Locator;
    readonly mobileMenuButton: Locator;
    readonly loginButtonDesktop: Locator;
    readonly loginButtonMobile: Locator;
    readonly myAdsBtn: Locator;
    readonly userMenuBtn: Locator;
    readonly loginModal: Locator;
    readonly aboutBtn: Locator;
    readonly searchInput: Locator;
    constructor(page: Page) {
        super(page);
        this.header = page.locator("header");
        this.mobileMenuButton = page.locator("[data-marker=\"mobile-menu-button\"]");
        this.loginButtonDesktop = page.locator("[data-marker=\"login-button-desktop\"]");
        this.loginButtonMobile = page.locator("[data-marker=\"login-button-mobile\"]");
        this.myAdsBtn = page.locator("[data-marker=\"my-ads-link\"]");
        this.userMenuBtn = page.locator("[data-marker=\"user-menu-button\"]");
        this.loginModal = page.locator("[data-marker=\"login-modal-content\"]");
        this.aboutBtn = page.locator("[data-marker=\"about-button\"]");
        this.searchInput = page.locator("[data-marker=\"search-input\"]");
    }

    protected root(): Locator {
        return this.header;
    }

    async openMainPage() {
        await this.page.goto("/");
        //await this.page.reload()
        await this.waitForOpen();
    }

    async openAboutPage() {
        await this.aboutBtn.click()
        //await this.page.goBack()
        //await this.page.goForward()
    }

    async fillSearchInput(str: string) {
        this.searchInput.fill(str);
        await this.page.waitForTimeout(5000);
    }

    async assertUserIsLoggedIn() {
        await expect(
            this.userMenuBtn,
            "Пользователь не авторизован")
            .toBeVisible();
    }

}
