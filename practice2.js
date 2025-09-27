let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7, 8]
//find intersecion
// let newArr = [...new Set(arr1)]
// console.log(arr2.filter((ele) => {
//     return newArr.includes(ele)
// }))

let len = arr1.length > arr2.length ? arr1.length : arr2.length
console.log(len)