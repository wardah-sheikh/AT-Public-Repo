import { Login } from "../POM/Login_page";
import fixtureData from '../fixtures/test_data.json'


const login = new Login()


describe('TS_02: To verify Login Functionality', () => {
    beforeEach("Visiting Website", ()=>{
        cy.visit('/')
      })
    
    it('TC_01: Verify that the user is able to login with valid credentials', ()=>{
        login.clickLoginButton()
        login.fillEmail(fixtureData.Email)
        login.fillPassword(fixtureData.Password)
        login.clickRememberMebox()
        login.Submit()
        login.assertSuccessfullLogin()
    })
    it('TC_02: Verify that the user is able to login with invalid credentials', ()=>{
        login.clickLoginButton()
        login.fillEmail(fixtureData.incorrect_email)
        login.fillPassword(fixtureData.Password)
        login.Submit()
        login.assertIncorrectEmail()
    })

    it('TC_03: Verify if the user is able to login with no credentials', ()=>{
        login.clickLoginButton()
        login.Submit()
        login.assertEmptyFormError()
    })

    it('TC_04: Verify that the user is able to logout after logging in', ()=>{
        login.clickLoginButton()
        login.fillEmail(fixtureData.Email)
        login.fillPassword(fixtureData.Password)
        login.clickRememberMebox()
        login.Submit()
        login.assertSuccessfullLogin()
        login.clickLogoutButton()
        login.assertLogout()
    })
})