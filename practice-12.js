// ***********PROBLEM-12***************
//=============Write a function  that finds all factors of given number ================
//input:number, positive integer
//Return : factor of a number([])
//Factor: Is a number that divides that given number evenly or exactly, leaving no remainder
// eg 4:1,2,4
// eg 14:1,2,7,14
// eg 35:1,5,7,35


function checkFactor(inputNumber) {
    let factor = [];
    inputNumber = Number(inputNumber)
    if (isNaN(inputNumber)) {
        return `Invalid input number`
    }
    if (inputNumber < 0) {
        return `input number should be positive`
    }
    for (let i = 1; i <= inputNumber; i++) {
        if (inputNumber % i === 0) {
            factor.push(i)
            // console.log(i, "is a factor")
        } else {
            // console.log(i, "is not factor")
        }
    }
    return factor
}
console.log("Factor of 3 is", checkFactor(3))
console.log("Factor of 14 is", checkFactor(14))
console.log("Factor of 35 is", checkFactor(35))
