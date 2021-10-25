/// <reference types="cypress" />

describe('all-my-tests', () => {

    let config = {
        "defaultCommandTimeout":10000
    };

    it('test1', () => {
        cy.googleSearch('Stephen Rocks')
        cy.contains('Stephen Rocks | The Health Foundation!!').should('not.exist')
        cy.contains('Stephen Rocks Economist - The Health Foundation').should('exist')
        cy.googleSearch("VTS Wins!")
        console.log("I did search for VTS Wins!!")
        cy.googleSearch("Microsoft Wins!")

    })

    it('simpleLogger', ()=>{console.log("hello!!")})

    it('simpleLoggerCustomConfig', config, ()=>{console.log("hello!!")})

    it('test2', () => {
        cy.visit('https://news.google.com')
    })
})