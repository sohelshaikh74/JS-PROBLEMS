// print the longest word from the sentence
//print the second longest word from the sentence


let str = "my name is sohel shaikh"; //

function secondLongword(str) {
    let longWord = "";
    let secLangWord = "";
    let wordArr = str.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > longWord.length) {
            secLangWord = longWord;
            longWord = wordArr[i];
        } else if (wordArr[i].length > secLangWord.length && wordArr[i].length < longWord.length) {
            secLangWord = wordArr[i];
        }
    }
    return secLangWord;
}
console.log(secondLongword(str));

