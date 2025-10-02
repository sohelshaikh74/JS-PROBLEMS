// ***********PROBLEM-16***************
//=============Write a function  that count the  words in a given sentence ================
// eg. "This is the sentence"  == >  4 word
// eg. "What is the day today" ==> 5 word,



function countWordsInSentence(str) {
    let countWord = 0;
    let countSpace = 0;
    if (typeof str !== 'string') {
        throw Error("Please enter valid string")
    }
    str = String(str)
    let wordCount = str.trim().split(" ")
    for (let i = 0; i < wordCount.length; i++) {
        if (wordCount[i] == "") {
            countSpace++
            continue;
        }
        countWord++
    }
    return {
        space: countSpace,
        word: countWord
    }
}
console.log(countWordsInSentence("This is the sentence"))
// console.log(countWordsInSentence("What is the day today"))
console.log(countWordsInSentence("Javascript is   very powerfull language"))  //emplicitly added space inside
// console.log(countWordsInSentence(" fullstack means frontend as well as backend  "))  //emplicitly added space at the end
// console.log(countWordsInSentence(35425))
// console.log(countWordsInSentence("4335 897"))  


// 2nd way -->
function countWordsInSentence2(str) {
    if (typeof str !== 'string') {
        return 'please enter valid string '
    }
    const words = str.trim().split(" ").filter(boolean)
    return words.length
}
console.log(countWordsInSentence("this is a very beautiful sentence in the world"))