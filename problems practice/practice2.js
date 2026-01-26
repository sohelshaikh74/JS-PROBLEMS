// let st1 = "this is sohel    here";
let st1 = "javascirpt is      very    powerfull    language"
//count the word in the give sentence
function countWordInSentece(st) {
    let wordsArr = st.trim().split(" ");
    console.log(wordsArr);
    let count = 0;
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].trim() == '') {
            continue
        } else {
            count++
        }

        // count++
    }
    console.log(`words:${count}`)
}
countWordInSentece(st1);