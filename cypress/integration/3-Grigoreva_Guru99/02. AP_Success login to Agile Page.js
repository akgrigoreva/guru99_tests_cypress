    describe('Success login to Agile Page', () => {
       beforeEach(() => {
    cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/')
    cy.get('h2').should('have.text', 'Guru99 Bank')
    })
  it('opens customer homepage', () => {
    cy.get('input[name="uid"]').should('be.visible').type('1303').should('have.value', '1303')
    cy.get('input[name="password"]').type('Guru99')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/customer/Customerhomepage.php')
  })
})