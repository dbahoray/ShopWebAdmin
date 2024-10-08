/// <reference types="Cypress" />

describe('Handle Customer Table', () =>{

    beforeEach('Login', () =>{

        cy.visit("https://webadmin.mccoymart.com/shop_admin/index.php")
        cy.get("#input-username").clear().type("dev@mccoymart.com")
        cy.get("#input-password").clear().type("MMdPL@$*221BKdd##")
        cy.wait(2000)

        cy.get("button[type='submit']").click()

        cy.get("#menu-customer>a").click() //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click() //customer child menu
    })
    it.skip('Check number of Rows & Columns', () =>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','20')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','8')
    })
    it.skip('Check specific data from a row & column', () =>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(5)")
        .contains("Enabled")
    })
    it('Read all rows & columns in the first page', () =>{

        cy.get("table[class='table table-bordered table-hover']>tbody")
        .each(($row,index,$rows) =>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols) =>{
                    cy.log($col.text())
                })
            })
        })
    })
})
