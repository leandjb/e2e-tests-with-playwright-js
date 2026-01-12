import { expect, test } from "@playwright/test";
import { afterEach, describe } from "node:test";

// afterEach()

describe("Selenium Base Homepage", () => {

    test("Text Input Field Testcase", async ({ page }) => {
        //Arrange
        await page.goto("/demo_page/");
        await expect.soft(page.locator("//td[contains(text(), 'Text Input Field:')]")).toHaveText("Text Input Field:");

        //Act
        await page.locator("#myTextInput").fill("I'm testing a input text with Playwright!")

        //Assert
        await expect.soft(page.locator("#myTextInput")).toBeVisible();
        await expect.soft(page.locator("#myTextInput")).toBeEnabled();
        await expect.soft(page.locator("#myTextInput")).toBeEditable();
        await expect(page.locator("#myTextInput")).toHaveValue("I'm testing a input text with Playwright!");
    });

    test("Textarea Testcase", async ({ page }) => {
        await page.goto("/demo_page/");
        await expect.soft(page.locator("//td[text()='Textarea:']")).toHaveText("Textarea:");

        await page.locator("#myTextarea").fill("I'm testing a text area with Playwright!")

        await expect.soft(page.locator("#myTextarea")).toBeVisible();
        await expect.soft(page.locator("#myTextarea")).toBeEnabled();
        await expect.soft(page.locator("#myTextarea")).toBeEditable();
        await expect(page.locator("#myTextarea")).toHaveValue("I'm testing a text area with Playwright!");
    });
})