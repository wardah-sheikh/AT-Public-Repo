import {addProductToWishlist, removeProductFromWishlist, login} from "../POM/functions";
import fixtureData from '../fixtures/test_data.json'
import urls from '../POM/urls';


describe('To verify that user is able to use the Wishlist functionality successfully',()=>{
    beforeEach("Visiting Website", ()=>{
        cy.visit(urls.loginPageUrl);
        login(fixtureData.Email, fixtureData.Password)
      })
    
    it('TC_01: Verify that the user is able add any product to Wishlist',()=>{
        addProductToWishlist(fixtureData.Text)
    })
    it('TC_02: Verify that the user is able remove the added product from Wishlist',()=>{
        removeProductFromWishlist(fixtureData.Text)
    })
})