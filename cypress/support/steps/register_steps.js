/* global Given, Then, When */

import { RegisterPage } from "../../page-object/register-page"
import { HomePage } from "../../page-object/home-page"


const registerPage = new RegisterPage
const homePage = new HomePage


// Given('I visit the site', () => {
//     cy.visit('')
// })

When('access the register page', () => {
  homePage.accessRegisterPage();
})

When('I set the values', () => {
  registerPage.setRegisterValues();
})

When('I click to register', () => {
  registerPage.clickRegister();
})

Then('the register is finished', () => {
  registerPage.validateRegister();
})

