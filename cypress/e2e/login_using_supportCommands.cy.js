describe('Login sucessfull using personalized commands', () => {
    beforeEach(() => {
        cy.fixture('users').as('usersData');
    });

    it(' It should login with valid credentials', function () {
        cy.login(this.usersData.validUser.username, this.usersData.validUser.password);
        cy.url().should('include', '/inventory.html');
        cy.contains('Products').should('be.visible');
    });
});
