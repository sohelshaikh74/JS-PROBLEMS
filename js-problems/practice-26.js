// // ***********PROBLEM-26***************
//============= Write a program that checks if given number is a perfect number ================
// perfect number: The sum  of its proper divisors equals the number it self.
// Input: A positive integer
// Output:   * true if input number is a perfect number
// Example: 6, 28, 496, 8128
// Definition: The sum of its proper  divisors, excluding itself, equals the number it self
// 6:1,2,3 = 1 + 2 + 3 = 6 = true
// 28:1,2,4,7,14=28=true
// not perfect number
// 30:1,2,3,5,6,10,15=42=false

function isPerfectNumber(number) {
    let sum = 0;
    number = Number(number);
    if (number < 0) return 'should be positive number';
    if (isNaN(number)) {
        return 'please enter valid input';
    }
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    // if (sum === number) {
    //     return true;
    // } else {
    //     return false;
    // }
    return sum === number;
}
console.log(isPerfectNumber(8128));
console.log(isPerfectNumber(30));

