// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * 
 * cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Stephen Rocks')
            .get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.contains('Stephen Rocks | The Health Foundation!!').should('not.exist')
        cy.contains('Stephen Rocks Economist - The Health Foundation').should('exist')
 */

         Cypress.Commands.add('googleSearch', (searchTerm) => { 
            cy.visit('https://www.google.com')
            cy.get('.gLFyf').type(searchTerm)
            .get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
         })

         Cypress.Commands.add('wrongGoogleSearch', (searchTerm) => { 
            cy.visit('https://www.google.com')
            cy.get('.gLFyf').type(searchTerm)
            const button = cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
            button.click()
         })


         Cypress.Commands.add('login', (username, password) => { 
            cy.visit("https://acceptance.vts.com")
            cy.get('#user_email').type(username)
            cy.get('#user_password').type(password)
            cy.get('.btn-primary').click()
            cy.get('.u-m-top').contains('Deals')
         })

         Cypress.Commands.add('typeCommencementDate', (date) => { 
            cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type(date)
         })