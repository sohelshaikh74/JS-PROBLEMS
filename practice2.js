//write a funciton that returns the result of raising a given number to a specified power
//eg. 5,3 == 5*5*5=125
let raising = (base, exponent) => {
    base = Number(base)
    exponent = Number(exponent)
    if (isNaN(base) || isNaN(exponent)) return 'should be a number'
    if (base < 0 || exponent < 0) return 'should be positive number'
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result
}
console.log(raising(2, 3))
console.log(raising(2, -3))
console.log(raising(2, "fasd"))
console.log(raising(0, 0))
console.log(raising(5, 0))
console.log(raising(0, 5))
console.log(raising(0, null))
console.log(raising(true, 3))
