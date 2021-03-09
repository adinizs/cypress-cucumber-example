/* global Given, Then, When */

import { HomePage } from "../../page-object/home-page"
import { LoginPage } from "../../page-object/login-page"

const homePage = new HomePage
const loginPage = new LoginPage

Given('I visit the site', () => {
  cy.visit('')
})

When('access the login page', () => {
  homePage.accessLoginPage();
})

When('I type my credentials', () => {
  loginPage.typeCredentials();
})

Then('the login is successful', () => {
  loginPage.validateLogin();
})
