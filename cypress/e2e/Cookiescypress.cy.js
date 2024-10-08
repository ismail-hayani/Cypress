describe('Manage Cookies', ()=>{

    

    it ('GetCookies', ()=>{

        cy.visit('https://www.iam.ma/index.aspx')

        cookie=cy.getcookies()

        console.log(cookie)
    })
})