// ***********PROBLEM-13***************
//=============Write a function  that calculates and returns average of a set of numbres ================


//1st way-->
let numbers = [1, 2, 4]
function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return `please provide non empty array`
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log("The average of numbers array is", calculateAverage(numbers))

//2nd way-->
let numbers2 = [4, 3, 5, 8]
function calculateAverage2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return `please provide non empty array`
    }
    let totalNumber = arr.reduce((acc, ele) => acc + ele, 0)
    return totalNumber / arr.length
}
console.log("The average of numbres2 array is", calculateAverage2(numbers2))