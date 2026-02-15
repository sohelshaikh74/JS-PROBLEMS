const checkFactor = (num) => {
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error("input must be positive number")
    }
    let factor = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factor.push(i)
        }
    }
    return factor;
}
console.log(checkFactor(7))
