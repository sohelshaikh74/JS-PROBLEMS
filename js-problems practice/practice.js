function isArmStrong(input) {
    if (!Number.isInteger(input) || input <= 0) return 'input must be valid '
    power = input.toString().length;
    let sum = 0;
    let temp = input;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** power;
        temp = Math.floor(temp / 10);
    }
    return sum === input;
}
console.log(
    isArmStrong(153)
)
console.log(
    isArmStrong(9474)
)