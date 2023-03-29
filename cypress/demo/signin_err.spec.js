describe('Sign In', () => {
	const host = Cypress.env('HOST')
	const username = Cypress.env('USERNAME')
	const password = Cypress.env('PASSWORD')
	it('allows a user to sign in with valid credentials', () => {
		cy.log(host)
		cy.visit(`${host}/PageDangNhap.aspx`)
		cy.wait(3000)
		// Ignore exception error
		Cypress.on('uncaught:exception', (err, runnable) => {
			console.error('Uncaught exception:', err)
			return false
		})
		cy.get('#DN_txtAcc').type(username)
		cy.wait(1000)
		cy.get('#DN_txtPass').type(password)
		cy.wait(1000)
		cy.get('#QLTH_btnLogin').click()
		cy.wait(3000)
		cy.url().should('include', '/PageCaNhan.aspx')
		cy.contains('ABC DÈF')
		// cy.get('#logo').should('be.visible');
		cy.screenshot('valid_credentials', { capture: 'fullPage' })
		cy.wait(3000)
	})

	it('displays an error message for invalid credentials', () => {
		cy.visit(`${host}/PageDangNhap.aspx`)
		cy.wait(3000)
		// Ignore exception error
		Cypress.on('uncaught:exception', (err) => {
			console.error('Uncaught exception:', err)
			return false
		})
		cy.get('#DN_txtAcc').type('123456789')
		cy.wait(1000)
		cy.get('#DN_txtPass').type(password)
		cy.wait(1000)
		cy.get('#QLTH_btnLogin').click()
		cy.wait(3000)
		cy.contains('Kiểm tra lại tài khoản và mật khẩu')
		cy.screenshot('invalid_credentials', { capture: 'fullPage' })
		cy.wait(3000)
	})
})