// / <reference types="Cypress" />

describe('Navigation', () => {
  const { baseUrl } = Cypress.config();

  beforeEach(() => {
    cy.visit('/');
  });

  it('is displayed with items', () => {
    cy.get('.carbon-navigation-bar').contains('Landing Page');
    cy.get('.carbon-navigation-bar').contains('First Page');
    cy.get('.carbon-navigation-bar').contains('Second Page');
  });

  it('can switch pages', () => {
    cy.get('.carbon-navigation-bar a[href="/first-page"]').click();
    cy.url().should('equal', `${baseUrl}/first-page/content2`);

    cy.get('.carbon-navigation-bar a[href="/transition-page"]').click();
    cy.url().should('equal', `${baseUrl}/transition-page`);

    cy.get('.carbon-navigation-bar a[href="/"]').click();
    cy.url().should('equal', `${baseUrl}/`);
  });
});
