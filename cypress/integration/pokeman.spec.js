describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request(Cypress.config().baseURL + '/25').as('pikachu');
    });

    it('Validate the header', () => {
        cy.get('@pikachu')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@pikachu')
            .its('status')
            .should('equal', 200);
    });

    it('Validate the pokemon\'s name', () => {
        cy.get('@pikachu')
            .its('body')
            .should('include', { name: 'pikachu' });
    });

    it('Validate the pokemon\'s url', () => {
        cy.get('@pikachu')
            .its('body')
            .should('include', { weight: 60 });
    });


    it('Validate the pokemon\'s url', () => {
        cy.get('@pikachu')
        .its('body')
        
        // Parse JSON the body.
        // let body = JSON.parse(cy.get('@pikachu').body);
        // expect(response.status).to.eq(200);
    });


    it('test page', function () {
        // skip this test for now
        this.skip();
        cy.visit('http://example.com/')
        cy.contains('test page').click()
        cy.url()
            .should('include', '/test-page/')
    })
});