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
    })

    it('TC_02: Verify that the user is able to remove any product to cart',()=>{
        removeProductFromCart(fixtureData.Text)
    })

    it('TC_03: Verify that the user is able to checkout from cart page by checking the Terms of service checkbox',()=>{
        checkoutWithTermsAndService(fixtureData.Text)
    })

    it('TC_04: Verify that the user is able to checkout from cart page without checking the Terms of service checkbox',()=>{
        CheckoutWithoutTermsAndService(fixtureData.Text)
    })
})