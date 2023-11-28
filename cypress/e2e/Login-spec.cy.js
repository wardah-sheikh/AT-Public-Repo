import urls from '../POM/urls';
import { clickEmptyFormLoginButton, login, logout } from '../POM/functions';
import fixtureData from '../fixtures/test_data.json'

describe('TS_02: To verify Login Functionality', () => {
    beforeEach("Visiting Website", ()=>{
        cy.visit(urls.loginPageUrl);
      })
    
    it('TC_01: Verify that the user is able to login with valid credentials',()=>{
        login(fixtureData.Email, fixtureData.Password)
    })

    it('TC_02: Verify that the user is able to login with invalid credentials', ()=>{
        login(fixtureData.incorrect_email, fixtureData.incorrect_password)

    })
    
    it('TC_03: Verify if the user is able to login with no credentials',()=>{
        clickEmptyFormLoginButton()
    })

    it('TC_04: Verify that the user is able to logout after logging in', ()=>{
        login(fixtureData.Email, fixtureData.Password)
        logout()
    })
})