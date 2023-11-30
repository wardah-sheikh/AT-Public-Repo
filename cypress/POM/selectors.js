const selectors = {
    //Login
    emailInput: '[class="email"]',
    passwordInput: '#Password',
    rememberMeButton: '#RememberMe',
    loginButton: '[type="submit"]', 

    //Logout
    logoutButton: '.ico-logout',

    //RegisterForm
    genderButton: '#gender-female',
    firstName: '#FirstName',
    lastName: '#LastName',
    date: '[name="DateOfBirthDay"]',
    month: '[name="DateOfBirthMonth"]',
    year: '[name="DateOfBirthYear"]',
    email: '#Email',
    password: '#Password',
    confirmPassword: '#ConfirmPassword',
    registerButton: '[type="submit"]',

    //Cart 
    Apparel: 'Apparel',
    Clothing: '[title="Show products in category Clothing"]',
    product: '.product-title',
    productTextField: '.textbox',
    addToCart: '#add-to-cart-button-29',
    cartPage: '.ico-cart',
    removeProduct: '.remove-btn',
    getTermsandServiceBox: '#termsofservice',
    checkoutButton: '#checkout',
    termsAndServiceAlertBox: '#terms-of-service-warning-box',

    //Checkout
    country: '#BillingNewAddress_CountryId',
    state: '#BillingNewAddress_StateProvinceId',
    city: '#BillingNewAddress_City',
    address: '#BillingNewAddress_Address1',
    zipcode: '#BillingNewAddress_ZipPostalCode',
    phoneNumber: '#BillingNewAddress_PhoneNumber',
    continue1: '[name="save"]',
    shippingMethod: '#shippingoption_1',
    continue2: '#shipping-method-buttons-container',
    continue3: '#payment-method-buttons-container',
    continue4: '#payment-info-buttons-container',
    confirmOrder: '#confirm-order-buttons-container',

    //Wishlist
    addTowishlist: '.add-to-wishlist',
    openWishlist: '.wishlist-label',

    //CompareList
    addToCompareList: '.compare-products',
    openCompareList: '.content',
    removeFromList: '[type="button"]',

    //Search
    searchField: '#small-searchterms',
    searchButton: '[type="submit"]',

  };
  
export default selectors;
  