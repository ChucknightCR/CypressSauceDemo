describe('Login sucessfull on SauceDemo using Fixtures', () => {
    beforeEach(() => {
        cy.fixture('users').as('usersData');
    });

    it(' It should login with valid credentials', function () {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(this.usersData.validUser.username);
        cy.get('[data-test="password"]').type(this.usersData.validUser.password);
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.contains('Products').should('be.visible');
    });
});
