export class RegisterForm {
    
    getGenderButton(){
        return cy.get('#gender-female')
    }
    getFirstName(){
        return cy.get('#FirstName')
    }
    getLastName(){
        return cy.get('#LastName')
    }
    getDate(){
        return cy.get('[name="DateOfBirthDay"]')
    }
    getMonth(){
        return cy.get('[name="DateOfBirthMonth"]')
    }
    getYear(){
        return cy.get('[name="DateOfBirthYear"]')
    }
    getEmail(email){
       return cy.get('#Email')
    }
    getPassword(){
        return cy.get('#Password')
    }
    getConfirmPassword(){
        return cy.get('#ConfirmPassword')
    }
    getsubmitForm(){
        return cy.get('[type="submit"]').contains('Register')
    }
    assertRegistration(){ 
        return cy.contains('Your registration completed')
    }
    assertEmailerrorMessage(){
        return cy.contains('Wrong email')
    }

    assertFnameErrorMessage(){
        return cy.contains('First name is required.')
    }

    assertLastnameErrormessage(){
        return cy.contains('Last name is required.')
    }

    assertemptyEmailErrormessage(){
        return cy.contains('Email is required.')
    }

    assertPasswordErrormessage(){
        return cy.contains('Password is required.')
    }
    assertPasswordMismatchError(){
        return cy.contains('The password and confirmation password do not match.')
    }

}