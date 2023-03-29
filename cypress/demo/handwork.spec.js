describe('template spec', () => {
  const host = Cypress.env('HOST')
	const username = Cypress.env('USERNAME')
	const password = Cypress.env('PASSWORD')
  it('passes', () => {
    cy.visit(`${host}/PageDangNhap.aspx`)
    cy.wait(3000)
    // Ignore exception error
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err)
      return false
    })
    cy.get('#DN_txtAcc')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('tbody > :nth-child(1)').click();
    cy.get('#DN_txtAcc').clear();
    cy.get('#DN_txtAcc').type('123190109');
    cy.get('#DN_txtPass').type('01012001');
    cy.get('#QLTH_btnLogin').click();
    /* ==== End Cypress Studio ==== */
  })
})