import './commands'
require('cypress-plugin-tab')

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    whitelist: (xhr) => {
      // handle custom logic for whitelisting
      return false;
    }
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })