/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.clearFirebaseLocalStorage();
    cy.loginWithEmail();
    cy.queryByText('Settings').click();
  });

  afterEach(() => {
    cy.clearFirebaseLocalStorage();
  });

  it('should redirect to login if unauthorized', () => {
    cy.clearFirebaseLocalStorage();
    cy.visit('/settings');
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'Settings');
  });

  it('should have list of settings options', () => {
    cy.queryByText('Log out').should('exist');
  });

  it('should log out', () => {
    cy.queryByText('Log out').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
