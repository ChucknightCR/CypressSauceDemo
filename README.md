# Cypress End-to-End Testing Project

This project showcases the use of **Cypress** for automating end-to-end tests (E2E) on a sample web application: [SauceDemo](https://www.saucedemo.com/). It includes a variety of tests covering login, cart functionality, checkout flow, and more.

## Features Implemented

1. **Successful Login**
   - Verifies login with valid credentials.

2. **Invalid Login**
   - Tests login behavior with invalid credentials.

3. **Add Products to Cart**
   - Adds items to the cart and checks the cart counter.

4. **Complete Checkout Flow**
   - Simulates a full purchase flow:
     - Adds items to the cart.
     - Proceeds to checkout.
     - Fills out the contact form (first name, last name, ZIP code).
     - Finishes the purchase and verifies the confirmation.

5. **Using Fixtures**
   - Uses an external JSON file (`users.json`) to manage user data, improving test maintainability.

6. **Custom Commands**
   - Implements reusable commands (e.g., `cy.login()`) to reduce code duplication and improve clarity.

## Requirements

- Node.js (v14 or higher)
- Cypress (installed via npm)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <REPOSITORY_URL>
   cd <project_folder>
