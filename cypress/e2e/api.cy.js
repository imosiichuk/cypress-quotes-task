/// <reference types = "cypress" />
import schema from '../support/quotesSchema.json';

describe("API tests", () => {

    beforeEach(() => {
        cy.api('/api/quotes?page=1').its('status').should('eql', 200)
    });

    it("Check the header and body of the api request", () => {
        cy.api('/api/quotes?page=1').its('headers.content-type').should('eql', 'application/json')
        cy.api('/api/quotes?page=1').its('body').then((body) => {
            expect(typeof body).to.eql('object');
            expect(typeof body.has_next).to.eql('boolean');
            expect(typeof body.page).to.eql('number')
            expect(body.quotes.length).to.have.greaterThan(0);
            expect(typeof body.quotes).to.eql('object');
            expect(typeof body.quotes[0].author).to.eql('object');
            expect(Array.isArray(body.quotes[0].tags)).to.eql(true);
            expect(Array.isArray(body.top_ten_tags)).to.eql(true);
        });

    });

    it("Check the API request against the JSON schema", () => {
        cy.api('/api/quotes?page=1').its('body').should('jsonSchema', schema)
    });

    it("The duration of API request should be less than 2 seconds", () => {
        cy.api('/api/quotes?page=1').its('duration').should('be.lte', 2000)
    });

});