// ***********PROBLEM-11***************
//============= Write a function  that counts and prints the number of  vowels and  consonants in a given string ================
//input:string
//Return : Vowel and consonunt count
//Handle space chareacter 

let checkVoewlsAndConsonantCount = (inputString) => {
    if (typeof inputString !== "string") {
        throw Error("Should be a string")
    }
    inputString = inputString.toLowerCase()

    let vowelsCount = 0;
    let consonantCount = 0;
    if (inputString.length === 0) {
        throw Error('Empty string')
    }
    for (let i = 0; i <= inputString.length - 1; i++) {
        if (inputString[i] == 'a' || inputString[i] == 'e' || inputString[i] == 'i' || inputString[i] == 'o' || inputString[i] == 'u') {
            vowelsCount++
        } else if (inputString[i] == " ") {
            continue;
        } else {
            consonantCount++
        }
    } console.log("vowelsCount", vowelsCount)
    console.log("consonantCount", consonantCount)

}
// checkVoewlsAndConsonantCount("john doe")
// checkVoewlsAndConsonantCount("sohle")
// checkVoewlsAndConsonantCount(true)
// checkVoewlsAndConsonantCount("")
// checkVoewlsAndConsonantCount(462)
// checkVoewlsAndConsonantCount({ a: 1 })


//2nd way--->
let checkVoewlsAndConsonantCount2 = (inputString) => {
    if (typeof inputString !== 'string') {
        throw Error("Should be string")
    }
    inputString = inputString.toLowerCase()
    let vowelsCount = 0
    let consonantCount = 0
    for (let i = 0; i <= inputString.length - 1; i++) {
        let char = inputString[i]
        if ("aeiou".includes(char)) {
            vowelsCount++
        } else if (char === " ") {
            continue;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++
        }
    }
    return { voewls: vowelsCount, consonant: consonantCount }
}
console.log(checkVoewlsAndConsonantCount2("john"))
console.log(checkVoewlsAndConsonantCount2("john123!")) //--> very important //ignored symbol and number
// console.log(checkVoewlsAndConsonantCount())