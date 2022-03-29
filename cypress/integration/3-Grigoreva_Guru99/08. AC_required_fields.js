describe('AC_required fields', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
    cy.get('h1').should('have.text', 'Add Customer')
    })
 it('informs about required fields', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
})
  cy.get('input[name="fname"]').should('be.visible').click()
  cy.get('input[name="lname"]').should('be.visible').click()
  cy.get('label[id=message').contains('Customer name must not be blank').should('be.visible')
  cy.get('input[name="emailid"]').should('be.visible').click()
  cy.get('label[id=message50]').contains('Customer name must not be blank').should('be.visible')
  cy.get('textarea[name="addr"]').should('be.visible').click()
  cy.get('label[id="message9"]').contains('Email-ID must not be blank').should('be.visible')
  cy.get('input[name="telephoneno"]').should('be.visible').click()
  cy.get('label[id="message3"]').contains('Address Field must not be blank').should('be.visible')
  cy.get('[type="submit"]').click()
  cy.get('label[id="message7"]').contains('Mobile no must not be blank').should('be.visible')
  })
})