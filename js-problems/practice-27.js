// ***********PROBLEM-27***************
//=============Write a function  that checks if the provided password is strong or not ================
// Input: A password
// Output:
// * True if password string is strong
// * false if password string is not strong
// strong password =>
// * It should contain -> 1 . minimum 8 characters,
//                       3. One Small case characters a-z
//                       4. One Big case characters A-Z
//                       5. One number 0-9
//                       6. One special character -!@
// example -> 1. sohelSh1! => true
// example -> 1. sohel1! => false
// NO Regex 
//1st way->
let password = "sohel";
function isStrongPassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;
    let hashLower = false;
    let hasUpper = false;
    let hasNumebr = false;
    let hasSpecial = false;
    const specialChars = '-!@';
    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        let code = ch.charCodeAt(0);
        if (code >= 97 && code <= 122) hashLower = true;
        if (code >= 65 && code <= 90) hasUpper = true;
        if (code >= 48 && code <= 57) hasNumebr = true;
        if (specialChars.includes(ch)) hashLower = true;
    }
    return hashLower && hasUpper && hasNumebr && hasSpecial;
}
// console.log(isStrongPassword(password));

//2nd way->
function isStrongPassword2(passwordStr) {
    passwordStr = passwordStr.trim();
    if (passwordStr.length < 8) return false;
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numebr = '0123456789'
    const specialChar = '-!@'
    let isLowerCase = false;
    let isUpperCase = false;
    let isNumber = false;
    let isSpecial = false;
    for (let char of passwordStr) {
        if (lowerCaseChar.includes(char)) {
            isLowerCase = true;
        } else if (UpperCaseChar.includes(char)) {
            isUpperCase = true;
        } else if (numebr.includes(char)) {
            isNumber = true;
        } else if (specialChar.includes(char)) {
            isSpecial = true;
        }
    }
    if (isLowerCase && isUpperCase && isNumber && isSpecial) {
        return true
    }
    else {
        return false;
    }
}
console.log("Sohel! is", isStrongPassword2("Sohels1@"));