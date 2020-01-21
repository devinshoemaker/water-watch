// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('loginWithEmail', () => {
  cy.server();
  cy.route({
    method: 'POST',
    url:
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=*'
  }).as('getAccountInfo');

  cy.visit('/login');
  cy.get('.firebaseui-id-email').type(Cypress.env('user'));
  cy.get('.firebaseui-id-submit').click();
  cy.get('.firebaseui-id-password').type(Cypress.env('pass'));
  cy.get('.firebaseui-id-submit').click();

  cy.wait('@getAccountInfo');
  cy.url().should('eq', 'http://localhost:3000/home');
});

Cypress.Commands.add('clearFirebaseLocalStorage', () => {
  localStorage.removeItem('authenticated');
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
});
