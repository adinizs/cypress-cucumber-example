//elementos:

export class HomePage {

    visualizaOlaHomePage() {
        cy.contains('Olá,', {timeout : 5000})
    }
}