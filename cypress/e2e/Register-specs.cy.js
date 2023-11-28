import urls from '../POM/urls';
import {faker} from '@faker-js/faker'
import fixtureData from '../fixtures/test_data.json'
import { emptyRegisterFormSubmit, register } from '../POM/functions';


const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const date = '10'
const month = faker.date.month()
const year = '2004'
const email = faker.internet.email()
const password = faker.internet.password()

describe('TS_01: To verify Register functionality', () => {
  beforeEach("Visiting Register page", ()=>{
    cy.visit(urls.registerPageUrl)
  })
  
  it("TC:01: Verify that the user can Register to website successfully" ,()=>{
    register(firstName,lastName,date,month,year,email,password,password)
  })

  it("TC_02: Verify if user can submit the registration form with incorrect email",()=>{
    register(firstName,lastName,date,month,year,fixtureData.incorrect_email,password,password)
  })

  it("TC_03: Verify if user can submit empty registration form ",()=>{
    emptyRegisterFormSubmit()
  })

  it("TC_04: Verify error message for mismatching passwords",()=>{
    register(firstName,lastName,date,month,year,email,password,fixtureData.incorrect_password)
  })
})