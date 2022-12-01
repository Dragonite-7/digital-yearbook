/// <reference types = "cypress"/>

context("Homepage" , () => {
  beforeEach(() => {
      cy.visit("http://localhost:8080/cypress")
  })
  it("should find the page, and find the h1 element with show in it", () => {
      cy.get("h1").contains("show")
  })
})

context("Create Yearbook", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/create")
  })
  it("should have the create yearbook textbox", () => {
    cy.get('.MuiBox-root css-1efyeb7').should('be.visible')
  })
})