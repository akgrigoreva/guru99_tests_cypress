describe('AC_Success', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
    cy.get('h1').should('have.text', 'Add Customer')
    })
 it('can successfully adds customer with telephone consisting of digits', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
})
  cy.get('label[for="done"]').should('be.visible')
  cy.get('label[for="pending"]').should('be.visible').click()
  cy.get('input[name="fname"]').should('be.visible').type('John').should('have.value', 'John')
  cy.get('input[name="lname"]').should('be.visible').type('Smith').should('have.value', 'Smith')
  cy.get('input[name="emailid"]').should('be.visible').type('test_test@ya.com').should('have.value', 'test_test@ya.com')
  cy.get('textarea[name="addr"]').should('be.visible').type('Salisbury SP1 2EJ Great Britain').should('have.value', 'Salisbury SP1 2EJ Great Britain')
  cy.get('input[name="telephoneno"]').should('be.visible').type((Cypress._.random(0, 999999999999)))
  cy.get('[type="submit"]').click()
  cy.get('h3').should('be.visible')
  })
})