describe('AC_negative_scenarios', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
    cy.get('h1').should('have.text', 'Add Customer')
    cy.on('uncaught:exception', (err, runnable) => {
    return false
     })
    })
 it('informs about non-filled required fields', () => {

  cy.get('label[for="done"]').should('be.visible')
  cy.get('label[for="pending"]').should('be.visible').click()
  cy.get('input[name="fname"]').should('be.visible').type('John').should('have.value', 'John')
  cy.get('input[name="lname"]').should('be.visible').type('Smith').should('have.value', 'Smith')
  cy.get('input[name="emailid"]').should('be.visible').type('test_test@ya.com').should('have.value', 'test_test@ya.com')
  cy.get('input[name="telephoneno"]').should('be.visible').type((Cypress._.random(0, 999999999999)))
  cy.get('[type="submit"]').click()
  cy.on("window:alert", (str) => {
    //window:alert is the event which get fired on alert open
      expect(str).to.equal("please fill all fields");
    });
  })
 it('informs about fields filled with wrong data', () => {
  cy.get('label[for="done"]').should('be.visible')
  cy.get('input[name="fname"]').should('be.visible').type('123').should('have.value', '123')
  cy.get('input[name="lname"]').should('be.visible').type('&&&').should('have.value', '&&&')
  cy.get('label[id=message').contains('Numbers are not allowed').should('be.visible')
  cy.get('input[name="emailid"]').should('be.visible').type('123').should('have.value', '123')
  cy.get('label[id=message50]').contains('Special characters are not allowed').should('be.visible')
  cy.get('textarea[name="addr"]').should('be.visible').type('Salisbury, SP1 2EJ Great Britain').should('have.value', 'Salisbury, SP1 2EJ Great Britain')
  cy.get('input[name="telephoneno"]').should('be.visible').type('&&&').should('have.value', '&&&')
  cy.get('label[id="message9"]').contains('Email-ID is not valid').should('be.visible')
  cy.get('label[for="pending"]').should('be.visible').click()
  cy.get('label[id="message7"]').contains('Special characters are not allowed').should('be.visible')
  cy.get('[type="submit"]').click()
    });
  })