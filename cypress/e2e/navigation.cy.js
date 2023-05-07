/// <reference types = "cypress" />
describe("Page navigation tests", () => {

    it("Navigation to Love tag page", () => {
        cy.visit(`/`)
        cy.get('.col-md-4').contains('love').click()
        cy.url().should('include', 'love')
        cy.get('h3').contains("love")
        cy.get(':nth-child(1) > .tags').contains('love')
    })

    it("Navigation to the next Tag page", () => {
        cy.visit(`/tag/love/`)
        cy.get('.next > a').click()
        cy.url().should('eq', `${Cypress.config().baseUrl}tag/love/page/2/`)
        cy.get('.previous > a').should('be.visible')
    })


    it("Navigation to the previous page", () => {
        cy.visit(`tag/love/page/2/`)
        cy.get('.previous > a').click()
        cy.url().should('eq', `${Cypress.config().baseUrl}tag/love/page/1/`)
        cy.get('.previous > a').should('not.exist')
    })


    it("Navigation to the Author page", () => {
        cy.visit('/')
        cy.get('.col-md-8 > :nth-child(1) > :nth-child(2) > a').click()
        cy.get('.author-born-date').contains('March 14, 1879')
        // cy.isInViewport('.author-description')
    })

});