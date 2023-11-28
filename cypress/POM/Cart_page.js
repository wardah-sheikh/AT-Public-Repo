
export class Cart{
    getApparel(){
        return cy.contains('Apparel')
    }
    getClothing(){
        return cy.get('[title="Show products in category Clothing"]').contains('Clothing')
    }
    getProduct(){
        return cy.get('.product-title').contains('Custom T-Shirt')
    }
    getProductTextField(text){
        return cy.get('.textbox')
    }
    getAddtoCartButton(){
        return cy.get('#add-to-cart-button-29')
    }
    assertSuccessfullAddtoCart(){
        return cy.get('.content').contains('The product has been added to your shopping cart')
    }
    getCartPage(){
        return cy.wait(5000).get('.ico-cart')
    }
    removeProductfromCart(){
        cy.get('.remove-btn').click()
    }
    getTermsAndServicebox(){
        return cy.get('#termsofservice')
    }
    getCheckoutButton(){
        return cy.get('#checkout')
    }
    assertCheckout(){
        return cy.contains('Checkout')
    }
    termsOfServiceAlertBox(){
        return cy.get('#terms-of-service-warning-box')
    }
}