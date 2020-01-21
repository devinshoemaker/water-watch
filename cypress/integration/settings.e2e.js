/// <reference types="Cypress" />

context('Settings Page', () => {
  beforeEach(() => {
    cy.clearFirebaseLocalStorage();
    cy.loginWithEmail();
    cy.visit('/settings');
  });

  it('should redirect to login if unauthorized', () => {
    cy.clearFirebaseLocalStorage();
    cy.visit('/');
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
    cy.get('.alert-button-group > :nth-child(1)').should('exist');
    cy.queryAllByText('Confirm').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
