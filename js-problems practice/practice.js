//write a program that check if the provided password is strong or not
function isStrongPassword(password) {
    if (typeof password !== 'string') return "enter valid input"
    if (password.length <= 8) return "password should contain 8 characters";
    let specialChar = '-+=!@';
    let hasSpecial = false;
    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;
    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        let code = ch.charCodeAt(0);
        if (code >= 97 && code <= 122) hasLower = true;
        if (code >= 65 && code <= 90) hasUpper = true;
        if (code >= 48 && code <= 57) hasNumber = true;
        if (specialChar.indexOf(ch)) hasSpecial = true;
    }
    return hasLower && hasUpper && hasNumber && hasSpecial;
}
console.log(isStrongPassword("!1Sohelsh"));
console.log(isStrongPassword("423423"));
