export class Wishlist{
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
    clickWishlistButton(){
        cy.get('.add-to-wishlist').contains('Add to wishlist').click()
    }
    assertSuccess(){
        cy.get('#bar-notification').contains('The product has been added to your wishlist')
        .should('be.visible')
    }

    openWishlist(){
        cy.get('.wishlist-label').contains('Wishlist').click({force:true})
    }
    clickToRemove(){
        cy.get('.remove-btn').click()
    }
    assertEmptyWishlist(){
        cy.get('.no-data').should('contain','The wishlist is empty!')
    }

}