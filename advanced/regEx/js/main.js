// regular expression to validate email

// function to validate email
function validateEmail(email) {
    // regular expression
    var regEx =
        /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    return regEx.test(email);
}

// testing the function
var email = "email@email.com";
console.log(validateEmail(email)); // true
