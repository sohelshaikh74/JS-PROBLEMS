// // ================ problem --> 1 ======================
// //write a funtion that seperate string,character and number and print as array
// let arr = [100, 'q', 'sohel', 10, 8, 'c']
// let seperate = (arr) => {
//     let character = []
//     let string = [];
//     let number = []
//     arr.forEach(element => {
//         if (typeof element === 'number') {
//             number.push(element)
//         }
//         else if (typeof element === 'string') {
//             if (element.length > 1) {
//                 string.push(element)
//             } else character.push(element)
//         }
//     });
//     console.log(number)
//     console.log(string)
//     console.log(character)
// }
// // seperate(arr)

// //================== problem --> 2 ==================
// // merge two object
// let a = { a: 1 }; let b = { b: 2 }
// // console.log({ ...a, ...b })



// // =================== problemn --> 3===============
// //using funciton currign print sum of two number

// let sum = (a, b) => {
//     if (a && b) return a + b;
//     return function (b) {
//         return a + b;
//     }

// }
// // console.log(sum(8, 9))
// // console.log(sum(8)(9))


// // ================== probelm-4 ===============
// // What happens in [] === []

// // === checks for strict equality (no type conversion).

// // Arrays in JavaScript are objects, and objects are compared by reference, not by value.

// // [] creates a new array object in memory each time.

// // So in:

// // console.log([] === [])


// // The first [] is a new array in memory.

// // The second [] is another new array in memory.

// // They don’t point to the same reference → result is false.

// // 🔎 What happens in [] == []

// // == does loose equality, but for objects it still compares references, not values.

// // Since both [] are different objects in memory, it’s also false.

// // ✅ So:

// // console.log([] === []) // false
// // console.log([] == [])  // false

// // 🔑 Important takeaway

// // Arrays/objects are compared by reference, not by contents.

// // Only when two variables refer to the exact same array object will it be true:

// // let a = []
// // let b = a
// // console.log(a === b) // true (same reference)
// // console.log(a == b)  // true


// // ⚡Pro tip: If you want to compare arrays by value, you need to manually check their contents, e.g. with .every() or JSON.stringify().


// // ====================== problem 1 =======================================
// // reverse each of word
// let str = "sohel ibrahim shaikh"
// //print hkiahs miharbi lehos
// function reversString(str) {
//     let strArr = str.split(" ").reverse()
//     let result = strArr.map((ele) => {
//         return ele.split("").reverse().join("")
//     })
//     return result.join(" ")
// }
// // console.log(reversString(str))


// if ([] == []) {
//     console.log("hello")
// } else {
//     console.log("no one is present")
// }

// //output hello


// ================================new one(IMP) ========================
//Problems ==>print the longest word from the sentence
//Problems ==>print the second longest word from the sentence
// const str = "my name is sohel shaikh"
// let secondLongestWord = (str) => {
//     let wordsArr = str.split(" ");
//     let longWord = "";
//     let secondLongWord = "";
//     for (let i = 0; i < wordsArr.length; i++) {
//         if (wordsArr[i].length > longWord.length) {
//             secondLongWord = longWord;
//             longWord = wordsArr[i];
//         } else if (wordsArr[i].length > secondLongWord.length && wordsArr[i].length < longWord.length) {
//             secondLongWord = wordsArr[i]
//         }
//     }
//     return secondLongWord
// }
// console.log((secondLongestWord(str)))

// //To find out the summation to get 13
// const arr = [10, 18, 7, 6, 11]
// const summation = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 13) {
//             return indexOf(arr[i])
//         }

//     }
// }
// console.log(summation(arr))

// console.log(isNaN("fsad")) //true

// ===new one ===
// function check() {
//     return 100;
// }
// var check;
// console.log(check);


// console.log([1, 2, 3, 4, 5].map(e => {
//     if (e > 0) return;   //[undefined,undefined,undefined,undefined,undefined]
//     return e * 10
// }));

// ====================================== new one  ==========================
// myFun();  // Error
// var myFun = function () {
//     console.log("I am here ")
// }
// myFun() // sohel shaikh
// function myFun() {
//     console.log("sohel shaikh")
// }
// myFun() // i am there
// function myFun() {
//     console.log("I am there ")
// }
// myFun(); // i am there

// ######## new question
// 'use strict' //--> try with non strict mode
// abc = 1000;
// console.log(abc); 

//##### new q
abc = 1000;
// console.log(abc())

// =================================== New One ======================
// ######
let str = "javascript";
str[2] = 'd';
// console.log(abc);
// #######
let a = 100;
let z = a++; //100++
// console.log(a + z);//101+100=201

// #######
let str = "my name is sohel";
//reverse each word string -> output raja-> ajar
//1st way->
let str = "my name is sohel";
console.log(str);
function revEachWord(str) {
    if (typeof str !== 'string') {
        console.log('please enter valid input')
        return;
    }
    let strArr = str.split(" ");
    let result = strArr.map((ele) => {
        let data = ""
        for (let i = ele.length - 1; i >= 0; i--) {
            data += ele[i]
        }
        return data
    })
    console.log(result.join(' '))
}
// revEachWord(str)

//#####
// let arr = [1, 10, 18, 14, 6];
function abc(b, ...a) { // b=1,a=[9,10,11,12]
    console.log(a); //[9,10,11,12]
}
// abc(8, 9, 10, 11, 12);

// #####
// let arr = ["a", 1, "b", 2, "c", 3];
// //write function for seperate number and string into an array from given array]
// function seperate(arr) {
//     let numArr = [];
//     let strArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             strArr.push(arr[i]);
//         } else {
//             numArr.push(arr[i])
//         }
//     }
//     console.log(numArr)
//     console.log(strArr)
// }
// seperate(arr);

// #####
//swap two number without using thrid variable
let p = 3;
let q = 4;
// console.log("before swaping", p, q)
p = p + q; //7;
q = p - q;//q=3
p = p - q;//7-4=3
// console.log(p);
// console.log(q);
// console.log('after swaping', p.q)

// ####
let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5, 6, 7]
//find the interseciton of two array
function interSection(a, b) {
    let result = a.filter((ele) => {
        return b.includes(ele);
    })
    console.log(result)
}
// interSection(a1,a2);

//####
let a3 = [1, 2, 3, 4, 5]
//================================================================= new one =============================
console.log(100 + '8' + 20) //1028

//####
let abc = 100;
if (function xyz() { }) {
    abc = abc - typeof (xyz)//function => abc - function => NaN
}
console.log(abc) //NaN (get an error)


// =============================================== new one =======================
// #####
// let m = 5;
// m++;
// console.log(m);

// // #####
// let n = 6;
// n--;
// console.log(n);

//##tricky one
// let x = 5;
// let y = 5++;
// console.log(x, y);
//above program are incorrect
//#Why wrong?
// ++ works only on variables
// You cannot increment a literal value (5)
//error--> Uncaught SyntaxError: Invalid left-hand side expression in postfix operation

// let p = 5;
// let q = ++p;//
// console.log(p, q); //6,6

// let m = 10;
// let n = m--;
// console.log(m, n); //10,9

// #level-3
// let a = 5;
// let b = a++ + ++a;
// console.log(a, b);//7,12

// let x = 10;
// let y = ++x + x++ + --x;  //11 + 11 + 11 =>33
// console.log(x, y);///11,33

// let p = 3;
// let q = p++ + p++ + ++p; //3 + 4 + 6
// console.log(p, q); //6, 13

// =========================================== new one ======================
// ###new
// console.log([] == ![]);

// ###new
// function fnc() {
//     return
//     {
//         name: "sohel"
//     }
// }
// console.log(fnc()); // undefiend

// ### important ==========
const arr = [10, 12, 18, 6, 4];
// to bring the output as 30 first at sumation of two numebrs the two number
//  which bring out that goal which is 30 that indysis should be the ouput
// output -> 30 and index 1 and 2

function sumAndIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 30) {
                console.log(30, i, j);
                return;
            }
        }
    }
}
sumAndIndex(arr)

//2nd way->
function findIndex(arr) {
    let index = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === 30) {
            index = [i, i + 1]
        }
    }
    return index
}
console.log(findIndex(arr));
    