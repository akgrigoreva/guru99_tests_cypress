describe('Transition to Add Customer page', () => {
  it('checks the transition to Add customer page from Telecom Project ', () => {
    cy.visit('https://demo.guru99.com/telecom/index.html')
    cy.contains("a", "Add Customer").click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('eq', 'https://demo.guru99.com/telecom/addcustomer.php')
  })
})