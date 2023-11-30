
export class Login{

    getLoginButton(){
        return cy.get('.ico-login').contains('Log in')
    }
    getEmail(){
        return cy.get('[class="email"]') 
    }
    getPassword(password){
        return cy.get('#Password')
    }
    getRememberMebox(){
        return cy.get('#RememberMe')
    }
    getSubmitButton(){
        return cy.get('[type="submit"]').contains('Log in')
    }
    assertSuccessfullLogin(){
        return cy.contains('My account')
    }

    assertIncorrectEmail(){
        return cy.contains('Wrong email')
    }

    assertEmptyFormError(){
        return cy.contains('Please enter your email')
    }

    getLogoutButton(){
        return cy.get('.ico-logout').contains('Log out')
    }
    assertLogout(){
        return cy.contains('Log in').click()
    }
}