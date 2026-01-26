// ***********PROBLEM-9***************
//=============Write a function  that checks if a string is palindrome or not ================
//Return :boolean, true if palindrome and false if not palindrome
//palindrome ==> both side same eg. madam,level

let isPalindrome = (inputString) => {
    if (typeof inputString !== 'string') {
        return 'please enter valid string'
    }
    inputString = inputString.toLowerCase()
    let reversedString = ""
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i]
    }
    if (reversedString === inputString) {
        return true
    } else return false;
}
console.log("MADAM", isPalindrome("MADAM"))
console.log("demo", isPalindrome("demo"))
console.log(98, isPalindrome(98))

//2nd way -->
let checkPalindrome = (inputString) => {
    let isPalindrome = inputString.split("").reverse().join("")
    return isPalindrome === inputString ? true : false;
}
console.log(checkPalindrome("level"))
