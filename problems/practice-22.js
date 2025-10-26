// *********** PROBLEM-22 ****************
//============= Write a program that conunts the occurence of each character in given string ================
//INPUT : A stirng
//Output: Count of each character in the string

//solution : using for loop 
// make an empty object check if character exist in the object, if not then add it , increment the character value by 1
let string = "heLlo javascript"  //h:1,e:1,l:2,o:1 etc
function countOccurence(str) {
    str = str.toLowerCase()
    let result = {}
    for (let i = 0; i < str.length; i++) {
        if (!result[str[i]]) {
            result[str[i]] = 0;
        }
        result[str[i]] = result[str[i]] + 1;
    }
    return result;
}
console.log(countOccurence(string))
