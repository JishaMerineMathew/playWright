/* Assignment Details:
Your task is to print the title and url of a web page using Playwright.
Precondition:
- Launch Chromium in non-headless mode
- Create a new browser context.
- Open a new page within the browser context.
- Load the url https://login.salesforce.com/
- Use your Salesforce credentials that you’ve created
Requirements:
- Enter the username.
- Enter the password.
- Click the Login button.
- Wait for 10 seconds
- Print the page title and the current url of the page
- Close the browser */

import { chromium, test } from "@playwright/test";
import { clear } from "console";

test("Testing multiple context", async()=>
{   
    //Launch the browser
    const browser = await chromium.launch({headless:false, channel:"chrome"});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("jishamerine@testleaf.com");
    await page.locator("#password").fill("Sujith@123");
    await page.locator("#Login").click();
    await page.waitForTimeout(10000);

    const title = await page.title();
    console.log("The title of the page is: "+title);

    const url = page.url();
    console.log("The url of the page is: "+url);

});