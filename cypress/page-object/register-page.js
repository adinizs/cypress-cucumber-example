//elementos 
const pure = require('pure-gen');

const fieldName = '#nome'
const fieldEmail = '#email'
const fieldPassword = '#senha'
const btnRegister = '.btn'
const msgRegisterSuccess = '.alert'

var userName = pure.name.firstName()
var userEmail = userName + "@qa.com.br";


export class RegisterPage {

    setRegisterValues() {
        cy.get(fieldName).type(userName)
        cy.get(fieldEmail).type(userEmail)
        cy.get(fieldPassword).type('senha123')
    }

    clickRegister() {
        cy.get(btnRegister).click()
    }

    validateRegister() {
        cy.fixture('assert-messages').then((msg) => {
            cy.get(msgRegisterSuccess).should('include.text', msg.register.register_success_message)
        })
    }
}