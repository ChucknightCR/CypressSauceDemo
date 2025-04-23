describe('add the product to the cart', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('It should add a product to the cart and show it on the icon', () => {
        // Add the product
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Verify the cart icon has a 1.
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', '1');

        //review the cart so we can check if the item is there
        cy.get('.shopping_cart_badge').click();
    });
});
