
describe('AXA Assurance', () => {
  
  
    it('mounts', () => {
    
    cy.visit('https://www.iam.ma/index.aspx')
     //cy.url().should('include','aspx')
     //cy.url().should('eq','https://www.iam.ma/index.aspx')

    cy.url().should('include', 'iam.ma').and('eq','https://www.iam.ma/index.aspx')

    cy.title().should('eq', 'Maroc Telecom : forfaits téléphone mobile, fixe, internet, adsl, wifi, 4G, 3G Maroc')

   
    cy.get('.logovm > a > .img-responsive').should('be.visible')
  })
})