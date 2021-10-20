//elementos:

const fieldEmail = '#email'
const fieldPwd = '#senha'
const btnLogin = '.btn'
const helloUser = '.alert'

export class LoginPage {

    typeCredentials() {
        cy.get(fieldEmail).type('qa@qa.com.br');
        cy.get(fieldPwd).type('senha123');
        cy.get(btnLogin).click()
    }

    validateLogin() {
        cy.fixture('assert-messages').then((msg) => {
            cy.get(helloUser).should('include.text', msg.login.welcome_message)
        })
    }
}