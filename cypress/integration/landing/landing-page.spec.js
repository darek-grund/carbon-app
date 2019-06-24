// / <reference types="Cypress" />

describe('Landing Page', () => {
  const getNameInput = () => cy.get('.carbon-form fieldset [data-component="textbox"] [data-element="input"]');
  const invalidName = 'abc';
  const validName = 'valid';

  const getDateInput = () => cy.get('.carbon-form fieldset [data-component="date"] [data-element="input"]');
  const validDate = Cypress.moment().format('DD/MM/YYYY');
  const invalidDate = Cypress.moment().subtract(5, 'days').format('DD/MM/YYYY');

  it.only('should render form', () => {
    cy.visit('/');
    getNameInput().type(`{selectall}${invalidName}`).blur();
    getNameInput().closest('.carbon-textbox').should('have.class', 'common-input--error');

    getNameInput().type(`{selectall}${validName}`).blur();
    getNameInput().closest('.carbon-textbox').should('not.have.class', 'common-input--error');

    getDateInput().type(`{selectall}${invalidDate}`);
    cy.get('.DayPicker .DayPicker-Day--selected').click();
    getDateInput().closest('.carbon-date').should('have.class', 'common-input--error');

    getDateInput().type(`{selectall}${validDate}`);
    cy.get('.DayPicker .DayPicker-Day--selected').click();
    getDateInput().closest('.carbon-date').should('not.have.class', 'common-input--error');
  });
});
