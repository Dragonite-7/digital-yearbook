//this is the array of which we are comparing against to check for errors
const checkList = [
  "California",
  "New York",
  "Austin",
  "Chicago"
]



context("Cypress Test Page", () => {
  //before each will run before each test statement (it, in this case)
  beforeEach(() => {
    cy.visit("http://localhost:8080/cypress")
  })

it("Checking the order of the array", () => {
  //cy.get refers to which dom element are you targeting.
  //here, we are targeting the element with classname list and within it, the li elements.
  cy.get(".list>li").each((item, index) => {
    cy.wrap(item).should("contain.text", checkList[index]);
  })
})
})