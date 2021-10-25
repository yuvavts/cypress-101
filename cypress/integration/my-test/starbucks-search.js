/// <reference types="cypress" />

describe('Perform deal search and click on the results', () => {
  
    before(() => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
    })

    it('DealSearch', () => {
        cy.get('#keywordFilter').type('Starbucks')
        cy.contains('.table-row--with-hover', '500 - 900 sf').click() //searches just inside of table-row--with-hover
        cy.get('[aria-controls="proposal"]').click()
        cy.get('[data-test=add-proposal]').click()
        cy.get('.u-flex-expand-left > [data-test=button]').click()
        cy.typeCommencementDate('09/28/2021')
        //cy.get('#deal_terms_attributes\[1\]\.rentable_area').type('100')
        //cy.get('#deal_terms_attributes\[1\]\.commencement_date').type('09/27/2021')
        //cy.get(':nth-child(7) > .gr-16 > .form-control-container > .form-control').type('09/01/2021')
        cy.get('.ProposalForm-proposalProfileFooter_182-8 > .u-width-auto > [data-test=button]').click()
        cy.contains('.noty_body > .u-fw-light', 'Please correct the errors in each tab below.')
    })
})