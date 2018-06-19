describe("Existing routes", () => {
  it("has a home login route", () => {
    cy.visit("http://localhost:3000");
    cy.contains("I Need My Coffee");
  });
});
