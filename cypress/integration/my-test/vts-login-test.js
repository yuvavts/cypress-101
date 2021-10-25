/// <reference types="cypress" />

describe('VTS super-beta user test', () => {

    before(() => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
    })

    beforeEach(() => {
        console.log("I am called everytime a new test is run!")
    })

    it('AddDealTest', () => {
        cy.get('.AddButton-addDealButton_3eKjG').click() 
    })

})

