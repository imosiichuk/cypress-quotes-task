/// <reference types = "cypress" />
describe("Login page tests", () => {

    it("User should be able to login", () => {
        cy.visit(`/login`)
        cy.get('#username').type("name")
        cy.get('#password').type("password")
        cy.get('.btn').click()
        cy.url().should('eq', `${Cypress.config().baseUrl}`)
        cy.contains('Logout').should("be.visible")
    });

    it("User should not be able to login with empty credentials", () => {
        cy.visit(`/login`)
        cy.get('.btn').click()
        cy.get('.error').should('be.visible')
    });

    it("User should not be able to login without entering the username", () => {
        cy.visit(`/login`)
        cy.get('#password').type("password")
        cy.get('.btn').click()
        cy.get('.error').should('be.visible')
    });

    it.skip("User should not be able to login without entering the password", () => {
        cy.visit(`/login`)
        cy.get('#username').type("name")
        cy.get('.btn').click()
        cy.get('.error').should('be.visible')
    });
});