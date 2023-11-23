
export class Login{

    clickLoginButton(){
        cy.contains('Log in').click()
    }
    fillEmail(email){
        cy.get('[class="email"]').type(email)
    }
    fillPassword(password){
        cy.get('#Password').type(password)
    }
    clickRememberMebox(){
        cy.get('#RememberMe').check()
    }
    Submit(){
        cy.get('[type="submit"]').contains('Log in').click()
    }
    assertSuccessfullLogin(){
        cy.contains('My account').should('exist')
        cy.contains('Log out').should('exist')
    }

    assertIncorrectEmail(){
        cy.contains('Wrong email').should('exist')
    }

    assertEmptyFormError(){
        cy.contains('Please enter your email').should('exist')
    }

    clickLogoutButton(){
        cy.contains('Log out').click()
    }

    assertLogout(){
        cy.contains('Log in').should('exist')
        cy.contains('Register').should('exist')
    }
}