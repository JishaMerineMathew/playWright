/* Assignment Details:
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or ID, edits details of the lead (such as name, email, or status), and verifies that the changes have been successfully saved.
Test Steps:
Assignment: 1 Create a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions
 */

import {chromium, test, expect} from '@playwright/test';

let companyName = "Testleaf";
let firstName = "Test";
let lastName = "Last";

test("Test to Create a Lead using Assertions",async ({page}) => { 
    await page.goto("http://leaftaps.com/opentaps/control/main");                               //Navigate to the url
    await page.waitForTimeout(3000);

    //Enter the username and password
    await page.locator("#username").fill("Demosalesmanager");                                   //Enter the username
    await page.locator("#password").fill("crmsfa");                                             //Enter the password
    await page.locator(".decorativeSubmit").click();                                            //Click the Login button
    await page.waitForTimeout(3000);

    await page.click("text=CRM/SFA");                                                           //Click CRM/SFA
    await page.waitForTimeout(3000);

    await page.click("text=Leads");                                                             //Click Leads
    await page.click("text=Create Lead",{timeout:8000});                                       //Click Create Lead

    await page.waitForLoadState("load");

    await page.locator("[id='createLeadForm_companyName']").fill(companyName);                  //Fill the Company Name
    await page.locator("[id='createLeadForm_firstName']").fill(firstName);                      //Fill the First Name
    await page.locator("input[id='createLeadForm_lastName']").fill(lastName);                   //Fill the Last Name
    
    await page.locator("[id='createLeadForm_personalTitle']").fill('Hello');                    //Fill the Salutation
    await page.locator("[id='createLeadForm_generalProfTitle']").fill('Ms');                    //Fill the Title
    await page.locator("[id='createLeadForm_annualRevenue']").fill('1500000');                  //Fill the Annual Revenue
    await page.locator("[name='departmentName']").fill('Sales');                                //Fill the Department
    await page.locator("[id='createLeadForm_primaryPhoneNumber']").fill('0596782234');          //Fill the Phone number
    await page.click("input[name='submitButton']");                                             //Click Create Lead button
    
    await page.waitForTimeout(4000);

    expect(await page.textContent("[id^='viewLead_companyName']")).toEqual(expect.stringContaining(companyName));       //assertion on CompanyName field
    await expect(page.locator("[id^='viewLead_firstName_sp']")).toContainText(firstName);                               //assertion on FirstName
    await expect(page.locator("[id^='viewLead_lastName_sp']")).toContainText(lastName);                                 //assertion on LastName
    await expect(page.locator("[id^='viewLead_statusId']")).not.toBeEmpty();                                            //assertion on Status
    await page.waitForTimeout(3000);

});