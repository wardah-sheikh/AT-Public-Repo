import {RegisterForm} from "../POM/Register_page"
import {faker} from '@faker-js/faker'
import fixtureData from '../fixtures/test_data.json'

const Register = new RegisterForm()

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const date = '10'
const month = faker.date.month()
const year = '2004'
const email = faker.internet.email()
const company = faker.company.name()
const password = faker.internet.password()

describe('TS_01: To verify Register functionality', () => {
  beforeEach("Visiting Website", ()=>{
    cy.visit('/')
  })
  
  it("TC:01: Verify that the user can Register to website successfully" ,()=>{
    Register.clickRegisterButton()
    Register.selectGenderButton()
    Register.fillFirstName(firstName)
    Register.fillLastName(lastName)
    Register.selectDate(date)
    Register.selectMonth(month)
    Register.selectYear(year)
    Register.fillEmail(email)
    Register.fillCompanyName(company)
    Register.fillPassword(password)
    Register.fillConfirmPassword(password)
    Register.submitForm()
    Register.assertRegistration()
  })

  it("TC_02: Verify if user can submit the registration form with incorrect email",()=>{
    Register.clickRegisterButton()
    Register.selectGenderButton()
    Register.fillFirstName(firstName)
    Register.fillLastName(lastName)
    Register.selectDate(date)
    Register.selectMonth(month)
    Register.selectYear(year)
    Register.fillEmail(fixtureData.incorrect_email)
    Register.fillPassword(password)
    Register.fillConfirmPassword(password)
    Register.submitForm()
    Register.assertEmailerrormessage()
  })

  it("TC_03: Verify if user can submit empty registration form ",()=>{
    Register.clickRegisterButton()
    Register.submitForm()
    Register.assertFnameErrormessage()
    Register.assertLastnameErrormessage()
    Register.assertemptyEmailErrormessage()
    Register.assertPasswordErrormessage()
  })

  it("TC_04: Verify error message for mismatching passwords",()=>{
    Register.clickRegisterButton()
    Register.selectGenderButton()
    Register.fillFirstName(firstName)
    Register.fillLastName(lastName)
    Register.fillEmail(email)
    Register.fillPassword(password)
    Register.fillConfirmPassword(fixtureData.incorrect_password)
    Register.submitForm()
    Register.assertPasswordMismatchError()
  })
})