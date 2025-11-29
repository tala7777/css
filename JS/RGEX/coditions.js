function checkName(element, errorId) {
    let value = element.value.trim();
    const pattern = /^[A-Za-z\u0600-\u06FF'-]+(?:\s[A-Za-z\u0600-\u06FF'-]+)*$/;
    const isValid = pattern.test(value);

    const errorElem = document.getElementById(errorId);
    if (!isValid) {
        errorElem.innerText = "Please use letters only";
    } else {
        errorElem.innerText = "";
    }
    console.log("Value:", value, "Valid?", isValid);
}
function checkBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValue = birthdateInput.value;
    const errorElem = document.getElementById("birthdate-error");

    if (!birthdateValue) {
        errorElem.innerText = "Please enter your birthdate";
        birthdateInput.classList.add("invalid");
        return false;
    }
    const today = new Date();
    const birthDate = new Date(birthdateValue);

    let age = today.getFullYear() - birthDate.getFullYear();
    if (age < 13) {
        errorElem.innerText = "You must be at least 13 years old";
        return false;
    }



    errorElem.innerText = "";
    return true;
}
function checkEmail() {
    let emailValue = email.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = pattern.test(emailValue);
    const emailError = document.getElementById("email-error");
    if (!isValid) {
        emailError.innerText = "Please enter your email correctly";
    } else {
        emailError.innerText = "";
    }
}
function emailConf() {

    let email = document.getElementById("email").value;
    let confEmail = document.getElementById("confirm-email").value;
    if (email == confEmail) {
        document.getElementById("emailconf-error").innerText = "";

    }
    else {
        document.getElementById("emailconf-error").innerText = "The email and the confirmation email are not the same";
    }
}
function checkPass() {
    const passValue = password.value.trim();
    const passError = document.getElementById("pass-error");

    // Password rules:
    // - Starts with capital letter
    // - At least 2 numbers
    // - At least 1 special char
    // - Length 8–32
    const pattern = /^(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Z][A-Za-z\d@$!%*?&]{7,31}$/;

    const isValid = pattern.test(passValue);

    if (!isValid) {
        passError.innerText =
            "Password must:\n• Start with a capital letter\n• Contain at least 2 numbers\n• Include at least 1 symbol (@ $ ! % * ? &)\n• Be 8–32 characters long";
        password.classList.add("invalid");
    } else {
        passError.innerText = "";
        password.classList.remove("invalid");
    }
}
function passConf() {

    let password = document.getElementById("password").value;
    let confPass = document.getElementById("confirm-password").value;
    if (password == confPass) {
        document.getElementById("passconf-error").innerText = "";

    }
    else {
        document.getElementById("passconf-error").innerText = "The password and the confirmation password are not the same";
    }
}
function checkPhone() {
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput.value.trim();
    const phoneError = document.getElementById("phone-error");

    // Pattern: only numbers AND exactly 10 digits
    const pattern = /^\d{10}$/;

    if (!pattern.test(phoneValue)) {
        phoneError.innerText = "Phone number must be exactly 10 digits";
        phoneInput.classList.add("invalid");
    } else {
        phoneError.innerText = "";
        phoneInput.classList.remove("invalid");
    }
}
