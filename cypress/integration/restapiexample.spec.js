describe('Reqres API', () => {

    it('GET Request - returns JSON', () => {
        cy.request('GET',
            Cypress.config().restapiUrl + "api/v1/employees"
        )
            .its('headers')
            .its('content-type')
            .should('include', 'text/html')
    })
})