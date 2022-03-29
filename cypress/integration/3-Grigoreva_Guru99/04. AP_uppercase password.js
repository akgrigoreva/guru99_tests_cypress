    describe('Login to Agile Page with the uppercase password', () => {
       beforeEach(() => {
    cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/')
    cy.get('h2').should('have.text', 'Guru99 Bank')
    })
  it('opens customer homepage with uppercase password', () => {
    cy.get('input[name="uid"]').should('be.visible').type('1303').should('have.value', '1303')
    cy.get('input[name="password"]').type('GURU99')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/customer/Customerhomepage.php')
  })
})