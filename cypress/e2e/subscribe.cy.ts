describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("prototype@mail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("exist")
      .contains("prototype@mail.com")
  })

  it("does not allow a invalid address", () => {
    cy.getByData("email-input").type("protonmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("user already exits", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})
