// ***********PROBLEM-19***************
//=============Write a program that checks if number is an Armstrong or not ================
//input:A number
//output:true if a number is an armstrong and false if number is not an atrmstrong
// eg.153=(1^3)+(5^3)+(3^3) = 1 + 125 + 27 = 153 = true
// eg.370=(3^3)+(7^3)+(0^3) = 27 + 343 + 0 = 370 = true
// eg.243=(2^3)+(4^3)+(3^3) = 8 + 64 + 27 = 99 = false


//1st way-->
function isArmstrongNumber(inputNumber) {
    //validate
    inputNumber = Number(inputNumber)
    if (isNaN(inputNumber)) {
        return 'Please enter validn input'
    }
    if (inputNumber < 0 || inputNumber === 0) {
        return 'please enter valid input'
    }
    let temp = inputNumber
    let isArmstrongNumber = 0
    while (0 < temp) {
        let lastDigit = temp % 10
        isArmstrongNumber += lastDigit ** 3
        temp = parseInt(temp / 10)
    }
    if (isArmstrongNumber === inputNumber) return true
    else return false;

}
/*
console.log(isArmstrongNumber(153))
console.log(isArmstrongNumber("fsd"))
console.log(isArmstrongNumber("5"))
console.log(isArmstrongNumber("370"))
console.log(isArmstrongNumber(0))
*/

//2nd way-->
function isArmstrongNumber2(inputNumber) {
    let number = inputNumber
    const digit = []
    while (number > 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10)
        digit.push(lastDigit)
    }
    let length = digit.length;
    let sum = 0;
    digit.forEach((d) => {
        sum = sum + Math.pow(d, length)
    })
    // if (sum === inputNumber) {
    //     return true
    // } return false;
    return sum === inputNumber
}
console.log(isArmstrongNumber2(153))
console.log(isArmstrongNumber2(243))


// correct way for dynamic power
function isArmStrong(inputNumber) {
    if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
        return "Input must be poisitive number";
    }
    let power = inputNumber.toString().length;
    let temp = inputNumber;
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** power;
        temp = Math.floor(temp / 10);
    }
    return sum === inputNumber;
}
console.log(isArmStrong(153));
console.log(isArmStrong(9474));