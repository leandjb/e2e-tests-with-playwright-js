import { expect, test } from "@playwright/test";
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

    test('@regression button green-purple TC', async function ({ page }) {
        await page.goto("/demo_page/");

        await expect.soft(page.locator("//td[text()='Button:']")).toHaveText('Button:');
        await expect.soft(page.locator("//td[text()='Button:']")).toBeVisible();
        await expect.soft(page.locator("//td[text()='Read-Only Text Field:']")).toHaveText('Read-Only Text Field:');
        await expect.soft(page.locator("//td[text()='Read-Only Text Field:']")).toBeVisible();
        await expect.soft(page.locator("//p[text()='Paragraph with Text:']")).toHaveText('Paragraph with Text:');
        await expect.soft(page.locator("//p[text()='Paragraph with Text:']")).toBeVisible();

        await expect.soft(page.locator("#myButton")).toHaveText("Click Me (Green)");
        await expect.soft(page.locator("#myButton")).toHaveCSS('color', 'rgb(0, 128, 0)');
        await expect.soft(page.locator("#readOnlyText")).toHaveValue("The Color is Green");
        await expect.soft(page.locator("#ptext")).toHaveText("This Text is Green");

        await expect.soft(page.locator("//button[contains(text(),'Click Me')]")).toBeEnabled();
        await page.locator("//button[contains(text(),'Click Me')]").click();

        //final asserts
        await expect(page.locator("#myButton")).toHaveText("Click Me (Purple)");
        await expect(page.locator("#myButton")).toHaveCSS('color', 'rgb(128, 0, 128)');
        await expect(page.locator("#readOnlyText")).toHaveValue("The Color is Purple");
        await expect(page.locator("#ptext")).toHaveText("This Text is Purple");

    })

    test('@regression Hover Dropdown TC', async function ({ page }) {
        await page.goto("/demo_page/");

        await expect.soft(page.locator("//div[text()='Hover Dropdown']")).toBeVisible()
        await expect.soft(page.locator("//div[@class='dropdown-content']")).not.toBeVisible();

        await page.locator("//div[text()='Hover Dropdown']").hover();
        await expect.soft(page.locator("//div[@class='dropdown-content']")).toBeVisible();
        await page.locator("//a[@onclick='clickLink3()']").click();
        await expect(page.locator("//h3")).toHaveText("Link Three Selected");

        await page.locator("//div[text()='Hover Dropdown']").hover();
        await expect.soft(page.locator("//div[@class='dropdown-content']")).toBeVisible();
        await page.locator("//a[@onclick='clickLink2()']").click();
        await expect(page.locator("//h3")).toHaveText("Link Two Selected");

        await page.locator("//div[text()='Hover Dropdown']").hover();
        await expect.soft(page.locator("//div[@class='dropdown-content']")).toBeVisible();
        await page.locator("//a[@onclick='clickLink1()']").click();
        await expect(page.locator("//h3")).toHaveText("Link One Selected");
    })

    test('@regression HTML SVG ', async function ({ page }) {
        const svg_image_locator = page.locator("#svgRect");
        const svg_name_locator = page.locator("//td[text()='HTML SVG with rect:']");

        await page.goto("/demo_page/");
        await expect.soft(svg_name_locator).toHaveText("HTML SVG with rect:");
        await expect.soft(svg_image_locator).toBeVisible();
        await expect.soft(svg_image_locator).toHaveAttribute('stroke', 'teal');
        
        await svg_image_locator.click();
        await expect(svg_image_locator).toBeEnabled();
    })
});