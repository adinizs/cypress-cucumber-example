//elementos:

const fieldEmail = '#j_username'
const fieldPwd = '#j_password'
const btnLogin = '#login-checkout'
const loginButton = '.am-top-header__user-btn'
const helloUser = '.am-top-header-panel__body > .am-h5'

export class LoginPage {

    typeCredentials() {
        cy.get(fieldEmail, {timeout : 5000}).type('qa@keyrus.com.br');
        cy.get(fieldPwd, {timeout : 5000}).type('senha123');
        cy.get(btnLogin).click()
    }

    validateLogin() {
        cy.get(loginButton).click()
        cy.get(helloUser).should('include.text', 'Keyrus Automation')
    }
}