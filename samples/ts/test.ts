describe("$1", () => {
  const testHome = "/";

  beforeEach(() => {
    cy.login({ visit: testHome });
  });

  it("Has a page", () => {
    cy.visit(testHome);
    cy.contains("break", { timeout: 1 });
  });
});
