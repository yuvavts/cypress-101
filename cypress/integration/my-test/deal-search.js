/// <reference types="cypress" />

describe('Perform deal search and click on the results', () => {

    before(() => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
    })

    it('DealSearch', () => {
        cy.get('#keywordFilter').type('Cornerstone')
        cy.get('.table-row--with-hover > :nth-child(2)').click()
    })

})

describe('Perform deal search and click on the results', () => {
  
    before(() => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
    })

    it('DealSearch', () => {
        cy.get('#keywordFilter').type('Starbucks')
        cy.get('.table-row--with-hover').eq(1).click()
    })
})

