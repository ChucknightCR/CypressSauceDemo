describe('Invalid login on SauceDemo', () => {
    it('It should show a message error if the credentials are incorrect', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('invalid_user');
        cy.get('[data-test="password"]').type('incorrect_password');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});
