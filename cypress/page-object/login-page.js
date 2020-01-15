//elementos 

const fieldEmail = '#email'
const fielfSenha = '#password'
const loginButton = '.elementClassExample'


export class LoginPage {

    digitaEmail(email) {
        cy.get(fieldEmail).type(email)
    }

    digitaSenha(pwd) {
        cy.get(fielfSenha).type(pwd)
    }

    clicaBotaoLogin() {
        cy.get(loginButton).click()
    }
}