//elementos:

const loginButton = '.active > a'
const registerButton = '[href="/cadastro"]'

export class HomePage {

    accessRegisterPage() {
        cy.get(registerButton).click();
    }

    accessLoginPage() {
        cy.get(loginButton).click();
    }
}