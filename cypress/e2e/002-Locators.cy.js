describe('Get Locators', () => {
    it('css locator', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type('Admin') //get css selector
    })
})