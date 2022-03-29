 describe('Checking functionality RESET button on AP', () => {
    it("should clear all fields after clicking", () => {
    cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/')
    // Get an input, type into it and verify that the value has been updated
    cy.get('input[name="uid"]').should('be.visible').type('1303').should('have.value', '1303')
    cy.get('input[name="password"]').type('Guru99')
    cy.get('input[type="reset"]').click()
    cy.get('input[name="uid"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('[type="submit"]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('User or Password is not valid')
      cy.get('#alert-button').click()
      //error on the site with non-remove alert
    })
    cy.url().should('include', '/Agi_V1/index.php')
  })
 })