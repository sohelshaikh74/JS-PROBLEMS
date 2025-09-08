// ***********PROBLEM-6***************
//============= Write a function that calculate factorial of given number ================
function calcFactorial(inputNumber) {
    inputNumber = Number(inputNumber)
    if (isNaN(inputNumber)) {
        return 'invalid input!'
    }
    if (inputNumber < 0) {
        return 'Should be a positive number'
    }
    let factorial = 1;
    for (let i = 1; i <= inputNumber; i++) {
        // factorial = factorial * i;
        factorial *= i;
    }
    return factorial;
}
console.log(`The factorial of given number'5' is:`, calcFactorial(5))
console.log(`The factorial of given number'10' is:`, calcFactorial(10))
console.log(`The factorial of given number'0' is:`, calcFactorial(0))

console.log(`The factorial of given number'-11' is:`, calcFactorial(-11)) //--> very imporant
console.log(`The factorial of given number'fsjldf' is:`, calcFactorial("fsjldf")) //--> very imporant

