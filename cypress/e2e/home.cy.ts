describe("Home page", () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  }) 
  it("the h1 contains the correct text", () => {
    cy.getByData('hero-heading')
    // cy.get("[data-test='hero-heading']").should('exist').contains('Testing Next.js Applications with Cypress')
  })

  it('Test local 3000 only', () => {
    cy.contains('Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
    cy.get('dt')
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
  })
})
