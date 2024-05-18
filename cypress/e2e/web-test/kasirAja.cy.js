describe('template spec', () => {
  it('failed login - wrong-credentials', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('salahemail@gmail.com')
    cy.get('#password').type('passwordsalah')
    cy.get('.chakra-button').click()
    cy.get('.chakra-alert').should('contain.text','Kredensial yang Anda berikan salah')
   })
  it.only('Failed Login - Invalid Email', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('salah')
    cy.get('#password').type('passwordsalah')
    cy.get('.chakra-button').click()
    cy.get('.chakra-alert').should('contain.text','must be a valid email')
  })
  it('Success Login', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('aniska665@gmail.com')
    cy.get('#password').type('12345kasir')
    cy.get('.chakra-button').click()
    cy.url().should('include','dashboard')
  })
})