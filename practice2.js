// var a = [10, 11, 12, 13, 14]
// let print = (b, ...a) => {
//     console.log(a)  //[9,10,11,12]
//     console.log(typeof a) //argument
//     // console.log(b)  //8
// }
// print(8, 9, 10, 11, 12)

// let arr = [1, 2, 3]
// let arr1 = arr.map((ele) => {
//     return el = 8; //
// })
// console.log(arr1) //[8,8,8]

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }
// //convert obj to an array
// let array = Object.entries(obj)
// console.log(array)

let arr = [100, 'q', 'sohel', 10, 8, 'c']

//write a funtion that seperate string,character and number
let seperate = (arr) => {
    let character = []
    let string = [];
    let number = []
    arr.forEach(element => {
        if (typeof element === 'number') {
            number.push(element)
        }
        if (typeof element === 'string') {
            if (element.length > 1) {
                string.push(element)
            } else character.push(element)
        }
    });
    console.log(number)
    console.log(string)
    console.log(character)
}
seperate(arr)