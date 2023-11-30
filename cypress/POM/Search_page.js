export class SearchPage {

    typeValidInSearchBar(data){
        cy.get('#small-searchterms').type(data)
    }
    clickSearchButton(){
        cy.get('[type="submit"]').contains('Search').click()
    }
    assertResult(){
        cy.get('#products-pagesize').should('be.visible')
    }
    typeInvalidInSearchBar(data){
        cy.get('#small-searchterms').type(data)
    }
    assertInvalidDataResult(){
        cy.get('.no-result').should('contain','No products were found that matched your criteria.')
    }
}