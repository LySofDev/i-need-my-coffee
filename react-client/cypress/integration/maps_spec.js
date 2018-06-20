import { rootUrl } from '../spec-helper';

describe("Google Maps", () => {
  it('appears in the Home page', () => {
    cy.visit(rootUrl);
    cy.get('div').should('have.class', 'gm-style');
  })
});
