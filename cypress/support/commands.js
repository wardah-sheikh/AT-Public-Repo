import { RegisterForm } from "../POM/Register_page";
import { Login } from "../POM/Login_page";
import { Cart } from "../POM/Cart_page";

const Register = new RegisterForm()
const login = new Login()
const cart = new Cart()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }) 

Cypress.Commands.add('Registeration',(Fname,Lname,date,month,year,email,password,confirmpassword)=> {
    Register.getGenderButton().click()
    Register.getFirstName().type(Fname)
    Register.getLastName().type(Lname)
    Register.getDate().select(date)
    Register.getMonth().select(month)
    Register.getYear().select(year)
    Register.getEmail().type(email)
    Register.getPassword().type(password)
    Register.getConfirmPassword().type(confirmpassword)
    Register.getsubmitForm().click()
    Register.assertRegistration().should('exist')    
  });
Cypress.Commands.add('Login', (email,password)=>{
    login.getEmail().type(email)
    login.getPassword().type(password)
    login.getRememberMebox().check()
    login.getSubmitButton().click()
    login.assertSuccessfullLogin().should('exist')
   
})

Cypress.Commands.add('AddToCart', (text)=>{
    cart.getApparel().click()
    cart.getClothing().click()
    cart.getProduct().click()
    cart.getProductTextField().type(text)
    cart.getAddtoCartButton().click()
    cart.assertSuccessfullAddtoCart().should('be.visible')
    cart.getCartPage().click()
    cart.getTermsAndServicebox().check()
    cart.getCheckoutButton().click()
    cart.assertCheckout().should('be.visible')
})
