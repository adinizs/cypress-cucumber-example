// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('initServer', (method, url) => {
    cy.server();
    cy.route(method, url).as('waitEventXhr');
  });
  
  Cypress.Commands.add('validateRequest', (code) => {
    cy.wait('@waitEventXhr', { timeout: Cypress.config().global_timeout }).then((xhr) => {
      expect(xhr.status).be.eq(code);
    });
    cy.server({ enable: false });
  });