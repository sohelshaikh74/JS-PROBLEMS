// ***********PROBLEM-15***************
//=============Write a function  that tells if the given number is prime or not ================
//input: A number
//return: return true if prime number, and false if not prime number
//prime number: A number that can only be divided by itself and 1 without remainders

function isPrime(inputNumber) {
    inputNumber = Number(inputNumber)
    if (isNaN(inputNumber)) {
        return 'please enter valid input'
    } if (inputNumber <= 1) {
        return false
    }
    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            return false;
        }
    }
    return true
}
console.log(isPrime(10))
console.log(isPrime(7))
console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime("12"))
console.log(isPrime("fdasd"))

