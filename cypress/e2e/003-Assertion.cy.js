const { expect } = require("chai")

describe('Assertion', () => {
    it('Implicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
            .url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
    })

    it('Explicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get(".oxd-button").click()

        let expName = "Paul Collings"
        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text()
            //BDD Styles
            expect(actName).to.equal(expName)
        })
    })
})