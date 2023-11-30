import selectors from './selectors';

//Login Functions
const login = (email, password) => {
  cy.get(selectors.emailInput).type(email)
  cy.get(selectors.passwordInput).type(password)
  cy.get(selectors.rememberMeButton).click()
  cy.get(selectors.loginButton).contains('Log in').click()
};

const clickEmptyFormLoginButton = () => {
    cy.get(selectors.loginButton).contains('Log in').click()
};

const logout = () => {
    cy.get(selectors.logoutButton).click()
}

export { login, clickEmptyFormLoginButton, logout }

//Registeration Form Functions
const register = (fname, lname, date, month, year, email, password, confirmPassword) => {
    cy.get(selectors.genderButton).click()
    cy.get(selectors.firstName).type(fname)
    cy.get(selectors.lastName).type(lname)
    cy.get(selectors.date).select(date)
    cy.get(selectors.month).select(month)
    cy.get(selectors.year).select(year)
    cy.get(selectors.email).type(email)
    cy.get(selectors.password).type(password)
    cy.get(selectors.confirmPassword).type(confirmPassword)
    cy.get(selectors.registerButton).contains('Register').click()
}

const emptyRegisterFormSubmit = () => {
    cy.get(selectors.registerButton).contains('Register').click()
}

export { register, emptyRegisterFormSubmit }

//Cart Page functions
const addProductTocart = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCart).click()
    cy.wait(5000).get(selectors.cartPage).click()
}

const removeProductFromCart = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCart).click()
    cy.wait(5000).get(selectors.cartPage).click()
    cy.get(selectors.removeProduct).click()
}
const checkoutWithTermsAndService = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCart).click()
    cy.wait(5000).get(selectors.cartPage).click()
    cy.get(selectors.getTermsandServiceBox).click({force:true})
    cy.get(selectors.checkoutButton).click()
}

const CheckoutWithoutTermsAndService = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCart).click()
    cy.wait(5000).get(selectors.cartPage).click()
    cy.get(selectors.checkoutButton).click()
}

export { addProductTocart, removeProductFromCart, checkoutWithTermsAndService, CheckoutWithoutTermsAndService }

//Checkout
const fillCheckoutForm = (country, state, city, address, zipcode, phone)=>{
    cy.get(selectors.country).select(country)
    cy.get(selectors.state).select(state)
    cy.get(selectors.city).type(city)
    cy.get(selectors.address).type(address)
    cy.get(selectors.zipcode).type(zipcode)
    cy.get(selectors.phoneNumber).type(phone)
    cy.get(selectors.continue1).contains('Continue').click()
    cy.get(selectors.shippingMethod).check()
    cy.get(selectors.continue2).contains('Continue').click()
    cy.get(selectors.continue3).contains('Continue').click()
    cy.get(selectors.continue4).contains('Continue').click()
    cy.get(selectors.confirmOrder).contains('Confirm').click()
}
export {fillCheckoutForm}

//Wishlist
const addProductToWishlist = (text)=>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addTowishlist).click()
    cy.wait(5000).get(selectors.openWishlist).click()
}
const removeProductFromWishlist = (text)=>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addTowishlist).click()
    cy.wait(5000).get(selectors.openWishlist).click()
    cy.get(selectors.removeProduct).click()
}
export { addProductToWishlist, removeProductFromWishlist}

const addProductToCompareList = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCompareList).contains('Add to compare list').click()
    cy.get(selectors.openCompareList).contains('product comparison').click({force:true})
}
const removeProductFromCompareList = (text) =>{
    cy.contains(selectors.Apparel).click()
    cy.get(selectors.Clothing).contains('Clothing').click()
    cy.get(selectors.product).contains('Custom T-Shirt').click()
    cy.get(selectors.productTextField).type(text)
    cy.get(selectors.addToCompareList).contains('Add to compare list').click()
    cy.get(selectors.openCompareList).contains('product comparison').click({force:true})
    cy.get(selectors.removeFromList).contains('Remove').click()
}
export {addProductToCompareList, removeProductFromCompareList}

const searchInput = (data) =>{
    cy.get(selectors.searchField).type(data)
    cy.get(selectors.searchButton).contains('Search').click()
}
export {searchInput}