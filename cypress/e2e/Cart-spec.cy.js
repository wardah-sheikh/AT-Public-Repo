import fixtureData from '../fixtures/test_data.json'
import { addProductTocart, removeProductFromCart, checkoutWithTermsAndService, CheckoutWithoutTermsAndService, login } from "../POM/functions";
import urls from '../POM/urls';

describe('TS_03: To verify that user is able to use the cart functionality successfully',()=>{
    beforeEach("Visiting Website", ()=>{
        cy.visit(urls.loginPageUrl);
        login(fixtureData.Email, fixtureData.Password)
      })

    it('TC_01: Verify that the user is able to add any product to cart',()=>{
        addProductTocart(fixtureData.Text)
        cy.get('.content').should('have.text','The product has been added to your shopping cart')
    })

    it('TC_02: Verify that the user is able to remove any product to cart',()=>{
        removeProductFromCart(fixtureData.Text)
        cy.get('.no-data').should('contain','Your Shopping Cart is empty!')
    })

    it('TC_03: Verify that the user is able to checkout from cart page by checking the Terms of service checkbox',()=>{
        checkoutWithTermsAndService(fixtureData.Text)
        cy.get('.page-title').should('have.text','Checkout')
    })

    it('TC_04: Verify that the user is able to checkout from cart page without checking the Terms of service checkbox',()=>{
        CheckoutWithoutTermsAndService(fixtureData.Text)
        cy.get('#ui-id-2').should('have.text','Terms of service')
        cy.get('#terms-of-service-warning-box').should('have.text','Please accept the terms of service before the next step.')
    })
})