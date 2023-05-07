/// <reference types = "cypress" />
describe("Delayed page tests", () => {

    // By changing the defaultCommandTimeout we can define the time, in milliseconds, to wait until most DOM based commands are considered timed out.
    Cypress.config('defaultCommandTimeout', 15000)

    beforeEach(() => {
        cy.visit(`js-delayed/`)
    });

    it("The main page elements are displayed correctly on the delayed page", () => {
        cy.contains('Login').should("be.visible")
        cy.get('h1 > a').contains("Quotes to Scrape")
        cy.contains('Login').should("be.visible")
        cy.get('#quotesPlaceholder > :nth-child(1)').should("be.visible")
    })

    it("The footer is correctly displayed on the delayed page", () => {
        cy.get('.text-muted > a').should('have.attr', 'href', 'https://www.goodreads.com/quotes')
        cy.get('.copyright > a').should('have.attr', 'href', 'https://scrapinghub.com')
    })

    it("User is able to navigate to the Login page from the delayed main page", () => {
        cy.contains('Login').click()
        cy.get("#password").should("be.visible")
        cy.get("#username").should("be.visible")
    });

    it("User is able to navigate to the next page from the delayed main page", () => {
        cy.get('.next > a').click()
        cy.get('#quotesPlaceholder > :nth-child(1)').should("be.visible")
        cy.url().should('eq', `${Cypress.config().baseUrl}js-delayed/page/2/`)
        cy.get('#quotesPlaceholder > :nth-child(1)').should("be.visible")
        cy.get('.previous > a').should('be.visible')
    })

    it("User is able to navigate to the previous page from the delayed main page", () => {
        cy.visit(`${Cypress.config().baseUrl}js-delayed/page/2/`)
        cy.get('#quotesPlaceholder > :nth-child(1)').should("be.visible")
        cy.get('.previous > a').click()
        cy.url().should('eq', `${Cypress.config().baseUrl}js-delayed/page/1/`)
        cy.get('#quotesPlaceholder > :nth-child(1)').should("be.visible")
        cy.get('.previous > a').should('not.exist')
    })

    it("User is able to navigate to to the main page from the delayed main page", () => {
        cy.contains('Quotes to Scrape').click()
        cy.url().should('eq', `${Cypress.config().baseUrl}`)
        cy.get('.col-md-8').should("be.visible")
    })
});