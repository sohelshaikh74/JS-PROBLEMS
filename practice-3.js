// ***********PROBLEM-5***************
//=============Write a function that returns the reverse of string================
// ++ eg. hello->>olleh    
// 1st way-->
let string = "Hello, World!"
function reverseStrining(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error("Only strings are allowed!")
    }
    let reversed = ""
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i]
    }
    return reversed
}
// console.log(reverseStrinnig(string))
// console.log(reverseStrining(1245))  //-->very importantd


// 2nd way-->
function reverseStrining2(inputString) {
    let strArray = inputString.split("")
    let revString = strArray.reverse()
    return revString.join("")
}
console.log(reverseStrining2("javascript"))

// 3rd way-->
const reverseStrining3 = (inputString) => {
    return inputString.split("").reverse().join("")
}
console.log(reverseStrining3('javascirpt is very easy'))