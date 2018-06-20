import { rootUrl } from '../spec-helper';

describe("Existing routes", () => {
  it("has a home login route", () => {
    cy.visit(rootUrl);
    cy.contains("I Need My Coffee");
  });
});
