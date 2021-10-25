/// <reference types="cypress" />

const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require("constants")

describe('all-my-tests', () => {

    it.only('test1', () => {
        cy.wrongGoogleSearch('Stephen Rocks')
    })

    it('test2', () => {
        cy.visit('https://news.google.com')
    })
})