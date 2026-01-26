// *********** PROBLEM-23 ****************
//============= Write a program that checks if a given string is in alhabetical order ================
//Input:A string
//Output:
// -True if all characters are in alphabetical order
// -False if characters are not in alphabetical order
// eg:- 'acehkosvz' :true
// eg:- 'abcab' :false


// let input = "hello";

// console.log('A'.charCodeAt(0));
// console.log('a'.charCodeAt(0));
// console.log('b'.charCodeAt(0));
// console.log('a' < 'b')
// console.log('b' < 'a')
// console.log(' '.charCodeAt(0))

function isAlphabeticalOrder(input) {
    input = input.replace(/ /g, '')
    input = input.toLowerCase()
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] > input[i + 1]) {
            return false
        }
    }
    return true;
}
console.log(isAlphabeticalOrder('acgz'))
console.log(isAlphabeticalOrder('acg z'))
console.log(isAlphabeticalOrder('acagz'))
console.log(isAlphabeticalOrder('acag z'))
console.log(isAlphabeticalOrder('aAc g z'))
