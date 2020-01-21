/// <reference types="Cypress" />

context('Login Page', () => {
  beforeEach(() => {
    cy.clearFirebaseLocalStorage();
    cy.visit('/login');
  });

  afterEach(() => {
    cy.clearFirebaseLocalStorage();
  });

  it('should default path to login page', () => {
    cy.visit('/');
    cy.url().should('contain', '/login');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'Login');
  });

  it('should navigation to home after logging in successfully', () => {
    cy.loginWithEmail();
    cy.url().should('eq', 'http://localhost:3000/home');
  });
});
