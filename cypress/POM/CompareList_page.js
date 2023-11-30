export class CompareList{
    clickOnApparel(){
        cy.contains('Apparel').click()
    }
    clickOnAccessories(){
        cy.get('[title="Show products in category Accessories"]').contains('Accessories').click()
    }
    clickOnProduct(){
        cy.get('.product-title').contains('Ray Ban Aviator Sunglasses')
        .click()
    }
    clickCompareButton(){
        cy.get('.compare-products').contains('Add to compare list')
        .click()
    }
    assertSuccess(){
        cy.get('.content').should('contain','The product has been added to your product comparison')
    }
    openComparelist(){
        cy.get('.content').contains('product comparison').click({force:true})
    }
    clickToRemoveFromCart(){
        cy.get('[type="button"]').contains('Remove').click()
    }
    assertEmptyCompareList(){
        cy.get('.no-data').should('contain','You have no items to compare.')
    }

}