/// <reference types = "cypress" />
import {
    recurse
} from 'cypress-recurse';

describe("Pagination page tests", () => {

    // This test verifies that every time user scrolls down the new quote are shown on the list
    it("The 10 new quotes are shown on the main page every time the user scrolls down", () => {
        cy.visit(`/scroll`)
        recurse(
            () => cy.contains(".quote", "All you need is love. But a little chocolate now and then doesn't hurt.").should(() => {}),
            ($quote) => $quote.length > 0, {
                limit: 100,
                delay: 700,
                post() {
                    cy.get('.quote').then(($quotes) => {
                        cy.scrollTo("bottom")
                        cy.get(".quote").should("have.length.greaterThan", $quotes.length)

                    })
                }
            }
        )
    });

    it("User should be able to scroll to the bottom of the page", () => {
        cy.visit(`/scroll`)
        recurse(
            () => cy.contains(".quote", "... a mind needs books as a sword needs a whetstone, if it is to keep its edge.").should(() => {}),
            ($quote) => $quote.length > 0, {
                limit: 100,
                timeout: 20000,
                delay: 700,
                post() {
                    cy.get('.quote').then(($quotes) => {
                        cy.scrollTo("bottom")
                        cy.get(".quote").should("have.length.greaterThan", $quotes.length)
                    })
                }
            }
        )
        cy.scrollTo("bottom", {
            duration: 2000
        })
        cy.isInViewport('.footer')
    });

});