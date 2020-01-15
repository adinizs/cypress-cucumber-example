import { LoginPage } from "../../page-object/login-page"
import { HomePage } from "../../page-object/home-page"

 
const loginPage = new LoginPage
const homePage = new HomePage

beforeEach(() => {
Given(`I visit the site`, () => {
    cy.visit('')
  })
})

When(`I type the e-mail {string} and I type the password {string}`, (email, password) => {
  loginPage.digitaEmail(email)
  loginPage.digitaSenha(password)
})

When('I click to Login button', () => {
  loginPage.clicaBotaoLogin()
})

Then('the home page is displayed', () => {
  homePage.visualizaOlaHomePage()
})
