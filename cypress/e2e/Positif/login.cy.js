describe("Login Feature Testing", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });
  it("Login - standard_user", () => {
    //ASERTION
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
  });
  it("Logout - standard_user", () => {
    cy.url().should("include", "/inventory.html");
    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    //ASERTION
    cy.get(".login_logo").should("have.text", "Swag Labs");
  });
});
