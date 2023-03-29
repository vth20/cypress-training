console.log(Cypress.env('host'));
it("open web", () => {
	cy.visit("https://courses.letskodeit.com/practice");
});