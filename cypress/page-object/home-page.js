//elementos:

const loginButton = '.am-top-header__user-btn'
const registerButton = '.am-btn--secondary'
const login = '.am-top-header-panel__btns > .am-btn--primary'

export class HomePage {

    accessRegisterPage() {
        cy.get(loginButton, {timeout : 5000}).click();
        cy.get(registerButton, {timeout : 5000}).click();
    }

    accessLoginPage() {
        cy.get(loginButton, {timeout : 5000}).click();
        cy.get(login, {timeout : 5000}).click();
    }
}