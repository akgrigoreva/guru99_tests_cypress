
    describe('Success visit to Agile Page', () => {
  it('Visiting the page', () => {
    cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/')
  cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
  })
})
  