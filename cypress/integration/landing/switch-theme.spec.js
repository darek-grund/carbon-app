// / <reference types="Cypress" />

describe('Switch Theme', () => {
  const getSwitch = () => cy.get('.carbon-navigation-bar').contains('Dark theme').closest('.carbon-checkbox');

  it.only('is displayed with items', () => {
    cy.visit('/');

    // default state
    cy.get('body').should('have.css', 'background-color', 'rgb(238, 238, 238)');
    getSwitch().find('.carbon-switch__on').should('be.hidden');
    getSwitch().find('.carbon-switch__off').should('be.visible');

    // switch is clicked
    cy.get('.carbon-navigation-bar').contains('Dark theme').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)');
    getSwitch().find('.carbon-switch__on').should('be.visible');
    getSwitch().find('.carbon-switch__off').should('be.hidden');
  });
});
