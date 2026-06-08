import {test} from '@playwright/test'

//page = fixture

test('login sauce demo', async({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')



})