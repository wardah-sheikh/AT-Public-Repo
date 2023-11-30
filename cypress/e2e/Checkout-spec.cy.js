import { fillCheckoutForm, login, checkoutWithTermsAndService } from '../POM/functions';
import fixtureData from '../fixtures/test_data.json'
import {faker } from '@faker-js/faker'
import urls from '../POM/urls';


const address = faker.location.streetAddress()
const phone = faker.phone.number()
const zipcode = faker.location.zipCode()

describe('To verify that user is able to checkout successfully', ()=>{
    beforeEach("Visiting Website", ()=>{
        cy.visit(urls.loginPageUrl);
        login(fixtureData.Email, fixtureData.Password)
        checkoutWithTermsAndService(fixtureData.Text)
      }) 
    
      it('TC_01: Verify that the user is able to place the order successfully',()=>{
        fillCheckoutForm(fixtureData.country, fixtureData.state, fixtureData.city, address,
          zipcode, phone)
          cy.get('title').should('have.text','Your order has been successfully processed!')
        
      })
})