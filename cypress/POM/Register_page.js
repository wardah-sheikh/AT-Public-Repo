export class RegisterForm {
    
    clickRegisterButton(){
        cy.contains('Register').click()
    }
    selectGenderButton(){
        cy.get('#gender-female').click()
    }
    fillFirstName(Fname){
        cy.get('#FirstName').type(Fname)
    }
    fillLastName(Lname){
        cy.get('#LastName').type(Lname)
    }
    selectDate(date){
        cy.get('[name="DateOfBirthDay"]').select(date)
    }
    selectMonth(month){
        cy.get('[name="DateOfBirthMonth"]').select(month)
    }
    selectYear(year){
        cy.get('[name="DateOfBirthYear"]').select(year)
    }
    fillEmail(email){
        cy.get('#Email').type(email)
    }
    fillCompanyName(company){
        cy.get('#Company').type(company)
    }
    fillPassword(password){
        cy.get('#Password').type(password)
    }
    fillConfirmPassword(confirmpassword){
        cy.get('#ConfirmPassword').type(confirmpassword)
    }
    submitForm(){
        cy.get('[type="submit"]').contains('Register').click()
    }
    assertRegistration(){
        cy.contains('Your registration completed').should('exist')
    }
    assertEmailerrormessage(){
        cy.contains('Wrong email').should('exist')
    }

    assertFnameErrormessage(){
        cy.contains('First name is required.').should('exist')
    }

    assertLastnameErrormessage(){
        cy.contains('Last name is required.').should('exist')
    }

    assertemptyEmailErrormessage(){
        cy.contains('Email is required.').should('exist')
    }

    assertPasswordErrormessage(){
        cy.contains('Password is required.').should('exist')
    }
    assertPasswordMismatchError(){
        cy.contains('The password and confirmation password do not match.').should('exist')
    }

}