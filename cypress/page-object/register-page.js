//elementos 
const pure = require('pure-gen');
const registerButton = '#register_as_a_customer_btn'
const nameField = '[name=firstName]'
const lastNameField = '[name=lastName]'
const cpf = pure.document.brazilianCitizenNumber();
const email = pure.name.firstName() + "@keyrus.com.br";
const fieldCpf = '[name=taxId]'
const fieldDay = '.am-form__date-day > .am-form__field-text'
const fieldYear = '.am-form__date-year > .am-form__field-text'
const fieldMobileNumber = '#mobilePhone'
const fieldEmail = '#email'
const fieldCheckEmail = '[name="checkEmail"]'
const fieldPwd = '#pwd'
const fieldCheckPwd = '#checkPwd'
const btnContinue = '#nextStepButton1'
const fieldZipCode = '#zipCode'
const fieldNumber = '#register_number'
const radioBtnAmway = '.radioABOSponsr > :nth-child(2) > .am-form__label-radio'
const fieldAmwayZipCode = '#zipCodeSearchfield'
const BtnContinue2 = '#nextStepButton2'
const selectRadioBtnEmail = ':nth-child(3) > .am-form__label-radio'
const btnSendCodeVerification = '#sendVerificationCode'
const fieldCodeVerification = '[name="verificationCode"]'
const btnRegister = '#register'
const msgRegisterSuccess = '.am-h4'



export class RegisterPage {

    clickRegisterButton() {
        cy.get(registerButton).click();
    }

    setRegisterValues() {
        cy.get(nameField).type('Marcella')
        cy.get(lastNameField).type('Silva')
        cy.get(fieldCpf).type(cpf)
        cy.get(fieldDay).type('10')
        cy.get(fieldYear).type('1990')
        cy.get(fieldMobileNumber).type('11999999999')
        cy.get(fieldEmail).type(email)
        cy.get(fieldCheckEmail).type(email)
        cy.get(fieldPwd).type('senha123')
        cy.get(fieldCheckPwd).type('senha123')
        cy.initServer('POST', '/populateAddressDataForZip')
        cy.get(btnContinue).click()
        cy.get(fieldZipCode).type('06709300', { delay: 400 })
        cy.get('body').click().wait(2000)
        cy.validateRequest(200)
        cy.get(fieldNumber).type('20')
        cy.get(radioBtnAmway).click()
        cy.get(fieldAmwayZipCode).type('06709300')
        cy.get(BtnContinue2).click()
        cy.get(selectRadioBtnEmail).click()
        cy.get(btnSendCodeVerification).click()
        cy.get(fieldCodeVerification).type('5555')
        cy.get(btnRegister).click()
    }

    validateRegister() {
        cy.get(msgRegisterSuccess).should('include.text', 'Registro Completo de Cliente')
    }
}