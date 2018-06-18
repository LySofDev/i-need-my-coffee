describe('Branding', () => {
  it('It contains the  application name', () => {
    cy.visit('http://localhost:3000');
    cy.contains('I Need My Coffee');
  });
});
