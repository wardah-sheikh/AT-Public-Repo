import {searchInput} from "../POM/functions";
import fixtureData from '../fixtures/test_data.json'


describe('To verify that the search functionality is working fine ', ()=>{
    beforeEach("Visiting Website", ()=>{
        cy.visit('/') 
      })
    it('TC_01: Verify that the search is showing results for valid input', ()=>{
        searchInput(fixtureData.search)
        cy.get('#products-pagesize').should('be.visible')
    })
    it('TC_02: Verify that the search is showing results for invalid input', ()=>{
        searchInput(fixtureData.InvalidData)
        cy.get('.no-result').should('contain','No products were found that matched your criteria.')
   })
})