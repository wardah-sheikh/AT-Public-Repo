import {addProductToCompareList, removeProductFromCompareList, login} from "../POM/functions";
import fixtureData from '../fixtures/test_data.json'
import urls from '../POM/urls';


describe('To verify that user is able to use the Compare product functionality successfully',()=>{
    beforeEach("Visiting Website", ()=>{
        cy.visit(urls.loginPageUrl);
        login(fixtureData.Email, fixtureData.Password)
      })
    
    it('TC_01: Verify that the user is able add any product to Compare List',()=>{
        addProductToCompareList(fixtureData.Text)
    })
    it('TC_02: Verify that the user is able remove the added product from Wishlist',()=>{
        removeProductFromCompareList(fixtureData.Text)
    })

})