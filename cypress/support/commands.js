Cypress.Commands.add('apiLogin', () => {
  cy.request('POST', '/api/login', {
    email: 'demo@test.com',
    password: 'password123'
  });
});