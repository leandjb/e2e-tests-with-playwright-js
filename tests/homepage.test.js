import { expect, test } from "@playwright/test";
import { assert } from "console";
import { describe } from "node:test";

describe("Seleniumbase Homepage Test Suite", () => {

    test("@regression Text Input Field TC", async function ({ page }) {

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

    test("@regression Textarea TC", async ({ page }) => {
        await page.goto("/demo_page/");
        await expect.soft(page.locator("//td[text()='Textarea:']")).toHaveText("Textarea:");
        await expect.soft(page.locator("//td[text()='Textarea:']")).toBeVisible();

        await page.locator("#myTextarea").fill("I'm testing a text area with Playwright!")

        await expect.soft(page.locator("#myTextarea")).toBeVisible();
        await expect.soft(page.locator("#myTextarea")).toBeEnabled();
        await expect.soft(page.locator("#myTextarea")).toBeEditable();
        await expect(page.locator("#myTextarea")).toHaveValue("I'm testing a text area with Playwright!");
    });

    test('@regression Pre-Filled Text Field TC', async function ({ page }) {
        await page.goto("/demo_page/");
        await expect.soft(page.locator("//td[text()='Pre-Filled Text Field:']")).toHaveText("Pre-Filled Text Field:");
        await expect.soft(page.locator("//td[text()='Pre-Filled Text Field:']")).toBeVisible();

        await page.locator("input[name='preText2']").fill("Words added later!");

        await expect(page.locator("input[name='preText2']")).toBeVisible();
        await expect(page.locator("input[name='preText2']")).toHaveValue("Words added later!");
    })
})