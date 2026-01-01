// ***********PROBLEM-8***************
//============ write a function that calculates and prints the sum of the digit of a given number ===================

function calcSumOfDigit(inputNumber) {
    if (isNaN(inputNumber)) {
        throw new Error("Invalid input!")
    }
    if (inputNumber < 0) {
        throw new Error("Input number must be a positive number")
    }
    let inputNumberAsString = inputNumber.toString()
    let splitedInputString = inputNumberAsString.split("")
    let sumOfDigit = 0;
    splitedInputString.forEach((num) => {
        sumOfDigit += Number(num);
    })
    return sumOfDigit

}
// console.log(calcSumOfDigit(-12))
// console.log(calcSumOfDigit(12))
// console.log(calcSumOfDigit(23))
// console.log(calcSumOfDigit(23))
// console.log(calcSumOfDigit(0))
// console.log(calcSumOfDigit(4654))
// console.log(calcSumOfDigit("fadsa"))


// 2nd way-->
let sum = 0;
function calcSumOfDigit2(inputNumber) {
    while (inputNumber > 0) {

        let temp = inputNumber % 10
        let digit = parseInt(temp / 10)
        return sum = temp + digit;
    }
}
console.log(calcSumOfDigit2(12))

//3rd way ->
let num = 123;
num = String(num);
let sums = 0;
for (let n of num) {
    sums = (sums + n * 1);
}
console.log(sums);

//4th way->
let nums = 123;
const sum2 = [...String(num)];
let result = sum2.reduce((acc, digit) => Number(digit) + acc, 0);
console.log(result);
