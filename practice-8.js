// ***********PROBLEM-8***************
//============ write a function that finds and prints the maximum  element in an array of numbers ===================
//1st way-->
function maxElement(array) {

    if (!array || array.length === 0) {
        throw Error("We need some number in the array!")
    }
    let firstMaxElement = array[0]
    for (let i = 1; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw Error(`Each element of an array should be a number!`,)
        } else {
            if (firstMaxElement < array[i]) {
                firstMaxElement = array[i]
            }
        }
    }
    return firstMaxElement;
}
console.log("[1, 52, 42, 2]", maxElement([1, 52, 42, 2]))
console.log("[]", maxElement([]))
console.log("null", maxElement(null))
console.log("[34, 54, 3, 3, 23, 'fadf']", maxElement([34, 54, 3, 3, 23, "fadf"]))

