describe('First test', () => {
  it('Success goto home page orange', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })
  
  it('Success goto home page, negative title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM123')
  })
})
