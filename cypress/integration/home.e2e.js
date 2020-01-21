/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.clearFirebaseLocalStorage();
    cy.loginWithEmail();
  });

  afterEach(() => {
    cy.clearFirebaseLocalStorage();
  });

  it('should default path to home page', () => {
    cy.visit('/');
    cy.url().should('contain', '/home');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'Ionic Blank');
  });

  it('should be blank', () => {
    cy.get('ion-content').should('contain', 'The world is your oyster.');
  });
});
