// ================ problem --> 1 ======================
//write a funtion that seperate string,character and number and print as array
let arr = [100, 'q', 'sohel', 10, 8, 'c']
let seperate = (arr) => {
    let character = []
    let string = [];
    let number = []
    arr.forEach(element => {
        if (typeof element === 'number') {
            number.push(element)
        }
        else if (typeof element === 'string') {
            if (element.length > 1) {
                string.push(element)
            } else character.push(element)
        }
    });
    console.log(number)
    console.log(string)
    console.log(character)
}
// seperate(arr)

//================== problem --> 2 ==================
// merge two object 
let a = { a: 1 }; let b = { b: 2 }
// console.log({ ...a, ...b })



// =================== problemn --> 3===============
//using funciton currign print sum of two number

let sum = (a, b) => {
    if (a && b) return a + b;
    return function (b) {
        return a + b;
    }

}
// console.log(sum(8, 9))
// console.log(sum(8)(9))


// ================== probelm-4 ===============
// What happens in [] === []

// === checks for strict equality (no type conversion).

// Arrays in JavaScript are objects, and objects are compared by reference, not by value.

// [] creates a new array object in memory each time.

// So in:

// console.log([] === [])


// The first [] is a new array in memory.

// The second [] is another new array in memory.

// They don’t point to the same reference → result is false.

// 🔎 What happens in [] == []

// == does loose equality, but for objects it still compares references, not values.

// Since both [] are different objects in memory, it’s also false.

// ✅ So:

// console.log([] === []) // false
// console.log([] == [])  // false

// 🔑 Important takeaway

// Arrays/objects are compared by reference, not by contents.

// Only when two variables refer to the exact same array object will it be true:

// let a = []
// let b = a
// console.log(a === b) // true (same reference)
// console.log(a == b)  // true


// ⚡Pro tip: If you want to compare arrays by value, you need to manually check their contents, e.g. with .every() or JSON.stringify().








