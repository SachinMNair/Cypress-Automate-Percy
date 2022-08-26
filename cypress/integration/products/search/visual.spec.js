
describe('Facebook Visit', function() {
  beforeEach(function() {
    cy.visit('https://www.facebook.com')
  })
  it('Check home page', function() {
    cy.screenshot();
    cy.percySnapshot()
  })
})