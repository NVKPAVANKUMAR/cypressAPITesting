describe('Reqres API', () => {

    it('GET Request - returns JSON', () => {
        cy.request('GET',
            Cypress.config().rmBaseUrl + "api/users/2"
        )
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('POST Request - returns JSON', () => {
        cy.request('POST',
            Cypress.config().rmBaseUrl + "api/users",
            {
                "name": "morpheus",
                "job": "leader"
            })
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })


    // it('loads 1 item', () => {
    //     this.skip();
    //     cy.request("GET",
    //         Cypress.config().rmBaseUrl + "api/users/2")
    //         .its('body')
    //         .each(value =>
    //             expect(value).to.have.all.keys('id', 'aemail')
    //         )
    // })

    // it('login', () => {
    //     this.skip();
    //     cy.request({
    //         method: 'POST',
    //         url: Cypress.config().rmBaseUrl + "api/users",
    //         body: {
    //             "name": "morpheus",
    //             "job": "leader"
    //         }
    //     })
    //         .then((res) => {
    //             expect(res.body).to.have.property('data')
    //         })
    // })
})