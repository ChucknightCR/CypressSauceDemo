describe('Add the product to the cart on SauceDemo and finish the purchase', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('It should add a product to the cart and show it', () => {
        // Add the product
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Verify that the icon on the cart has a "1" number
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', '1');

        //review the cart so we can check if the item is there
        cy.get('.shopping_cart_badge').click();

        //Click on the checkout  button
        cy.get('[data-test="checkout"]').click();

        //Then, we will fill the information on the screen
        cy.get('[data-test="firstName"]').type('Adrian');
        cy.get('[data-test="lastName"]').type('Cruz');
        cy.get('[data-test="postalCode"]').type('20201');
        cy.get('[data-test="continue"]').click();

        //Finally, we will finish the purchase
        cy.get('[data-test="finish"]').click();
    });
});
