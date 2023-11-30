
export class Checkout{

    selectCountry(country){
        cy.get('#BillingNewAddress_CountryId').select(country)
    }
    selectState(state){
        cy.get('#BillingNewAddress_StateProvinceId').select(state)
    }
    enterCity(city){
        cy.get('#BillingNewAddress_City').type(city)
    }
    enterAddress(address){
        cy.get('#BillingNewAddress_Address1').type(address)
    }
    enterZipCode(zipcode){
        cy.get('#BillingNewAddress_ZipPostalCode').type(zipcode)
    }
    enterPhoneNumber(number){
        cy.get('#BillingNewAddress_PhoneNumber').type(number)
    }
    clickContinue(){
        cy.get('[name="save"]').contains('Continue').click()
    }

}