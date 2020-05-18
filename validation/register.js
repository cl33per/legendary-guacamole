const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    console.log(data)
    // Convert empty fields to an empty string so we can use validator functions
    data.profile.firstName = !isEmpty(data.profile.firstName) ? data.profile.firstName : "";
    data.profile.lastName = !isEmpty(data.profile.lastName) ? data.profile.lastName : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : "";

    // Name checks
    if (Validator.isEmpty(data.profile.firstName)) {
        errors.firstName = "First Name is required";
    }

    if (Validator.isEmpty(data.profile.lastName)) {
        errors.lastName = "Last Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // username checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    } else if (!Validator.isEmail(data.username)) {
        errors.username = "Username is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = "Confirm password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
