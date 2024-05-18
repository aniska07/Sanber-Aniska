describe('template spec', () => {
  it('Should show error for mismatched passwords', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-female').click()
    cy.get('#FirstName').type('Aniska')
    cy.get('#LastName').type('AR')
    cy.get('#Email').type('aniska66@gmail.com')
    cy.get('#Password').type('webshop')
    cy.get('#ConfirmPassword').type('weshop')
    cy.get('#register-button').click()
    cy.get('.field-validation-error')
      .should('contain', 'The password and confirmation password do not match.');
  })
  it('Should show error for already registered email', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-female').click()
    cy.get('#FirstName').type('Aniska')
    cy.get('#LastName').type('AR')
    cy.get('#Email').type('aniska66@gmail.com')
    cy.get('#Password').type('webshop')
    cy.get('#ConfirmPassword').type('webshop')
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors')
      .should('contain', 'The specified email already exists');
  })
  it('Should successfully login with valid credentials', () => {
    cy.visit('https://demowebshop.tricentis.com/login')
    cy.get('#Email').type('aniska66@gmail.com')
    cy.get('#Password').type('webshop')
    cy.get('.login-button').click()
    cy.url().should('not.include', '/login');
  })
})