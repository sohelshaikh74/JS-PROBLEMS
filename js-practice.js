let str = "My name is sohel shaikh";

function longWord(str) {
    let currentWord = "";
    let longestWord = "";
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== ' ' && i < str.length) {
            currentWord += str[i];
        } else {
            if (currentWord.length > longestWord) {
                longestWord = currentWord
            }
            currentWord = "";
        }
    }
    return longestWord;
}
console.log(longWord(str))
