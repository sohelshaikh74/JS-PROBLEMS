// const arr = [1, 2, 3, 2, 5, 7, 4, 6, 7]
// // let uniqueElement = new Set(arr)
// // console.log(uniqueElement.has(3))
// // let uniqueArray = [...new Set(arr)] //{1,2,}
// // let result = [...uniqueArray]

// // // console.log(result)
// // // console.log(uniqueArray.has(2))

// let arr1 = [1, 2, 3]
// let arr2 = [3, 4, 5]
// // let uniqueArray = [...arr1, ...arr2]
// // console.log(uniqueArray)
// // let result = [...new Set(uniqueArray)]
// // console.log(result)

// let intersect = arr1.filter((ele) => {
//     return new Set(arr2).has(ele)
// })
// // console.log(intersect)

// //difference
// let difference = arr1.filter((ele) => {
//     return !(new Set(arr2).has(ele))
// })
// // console.log(difference)


// //delete an an element using set we can also use splice() method but it is very length process
// //remember when you are using set it is also remove duplicate element
// let mySet = new Set(arr)
// console.log(mySet)
// mySet.delete(5)
// console.log(mySet)

let mySet = new Set(['delhi', 'tokyo', 'london', 'berline'])

//for of loop
// for (let value of mySet) {
//     console.log(value)
// }

//forEach()
mySet.forEach((ele) => {
    console.log(ele)
})