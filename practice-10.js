// ***********PROBLEM-10***************
//=============Write a function  that returns the result of raising a given number to a specified power ================
//input : Two numbers
//base and exponent
//Return:Base to the power of exponent
// eg.2,3:2*2*2=8, eg. 5,4:5*5*5*5=625
// Do not use Math.pow(ee)

function numberPower(base, exponent) {
    base = Number(base)
    exponent = Number(exponent)
    if (base < 0 || exponent < 0) {
        return 'number should be a poistive '
    }
    if (isNaN(base) || isNaN(exponent)) {
        return 'invalid inputs'
    }
    let result = base;
    for (let i = 1; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
console.log(numberPower(5, 4))
console.log(numberPower(2, 3))
console.log(numberPower(2, -3))
// numberPower(5, 0)
// numberPower(0, 0)
console.log(numberPower(5, "fad"))
console.log(numberPower(true, 5))

