describe('Visit adding tariff plan page', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')

    cy.get('input[name="rental"]').should('be.visible').type('12345').should('have.value', '12345')
    cy.get('input[name="local_minutes"]').type(Cypress._.random(0, 99999)) 
    cy.get('input[name="inter_minutes"]').type(Cypress._.random(0, 99999))
    cy.get('input[name="sms_pack"]').type(Cypress._.random(0, 99999))
    cy.get('input[name="minutes_charges"]').type(Cypress._.random(0, 999))
    cy.get('input[name="inter_charges"]').type(Cypress._.random(0, 999))
    cy.get('input[name="sms_charges"]').type('123').should('have.value', '123')
    cy.get('input[type="submit"]').click()
    
      cy.get('h2').contains('Congratulation you add Tariff Plan')
      // Should be on a new page
  })
})