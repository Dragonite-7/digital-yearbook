/// <reference types = "cypress"/>

context("Homepage" , () => {
  beforeEach(() => {
      cy.visit("http://localhost:8080/cypress")
  })
  it("should find the page, and find the h1 element with show in it", () => {
      cy.get("h1").contains("show")
  })
})