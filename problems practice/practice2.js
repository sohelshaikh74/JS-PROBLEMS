function raisingPwoer(base, exponent) {
    let result = base;
    for (let i = 1; i <= exponent; i++) {
        result = base * result;
    }
    return result
}
console.log(
    raisingPwoer(2, 3)
)