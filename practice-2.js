// ***********PROBLEM-4***************
//=============Write a function that tells if a given number is even or odd ================
// --1st way
function evenOdd(num) {
    if (isNaN(num)) {  //--> if we get number as string then we are validating here
        console.log(`Invalid input! please enter a number`)
    }
    else if (num % 2 === 0) {
        console.log(`Number is even:${num}`)
    } else {
        console.log(`Number is odd:${num}`)
    }
}

//+++++++NOTE--> IF REMAINDER IS NON ZERO THEN IT WILL ODD LIKE (1,-1)++++
// USE MODULES OPERATOR TO GET REMAINDER 
// evenOdd(-1)
// evenOdd(-15)
// evenOdd(1)
// evenOdd(2)
// evenOdd(0)
// evenOdd("5")
// evenOdd("jflasd") //---> VERY IMPORTANT

//checking
function checkEvenOrOdd(a) {
    console.log(a % 2)
}
// checkEvenOrOdd(-1)
// checkEvenOrOdd(1)
// checkEvenOrOdd(2)
// checkEvenOrOdd(0)
// checkEvenOrOdd("kjhj")

// ---2nd way
function checkEvenOrOdd2(num) {
    if (isNaN(num)) return 'Invalid input! please enter valid input'
    return num % 2 === 0 ? "even" : "odd"
}
// console.log(checkEvenOrOdd2("5"))
// console.log(checkEvenOrOdd2("jflsd"))

// ****************** PROBLEM - 4 *****************
// ============ WRITE A FUNCTION THAT FINDS AND PRINT THE SMALLEST NUMBER AMONG THREE GIVEN NUMBERS.==================
function smallestNum(a, b, c) {
    if (isNaN(a) && isNaN(b) && isNaN(c)) {
        return `please enter valid input`
    }
    if (a < b && a < c) {
        // console.log(`Smallest number is ${a}`)
        return a;
    } else if (b < c && b < a) {
        // console.log(`Smallest number is ${b}`)
        return b;

    } else if (c < a && c < b) {
        // console.log(`Smallest number is ${c}`)
        return c;
    }
    return a; //in case of the input are same three time like 3 3 3 
}
// smallestNum(56, 2, 123)
// smallestNum(-1, -6, 9)
// console.log(smallestNum(3, 3, 3)) //if three are same 
// console.log(smallestNum(3, 3, 1))
// console.log(smallestNum(3, 3, 4))
// console.log(smallestNum("fasd", "fdsa", 5))  //need to implement correct


//2nd way -->  this way is very simple and readable
function smallestNum2(a, b, c) {
    let smallest = a;
    if (b < smallest) {
        smallest = b;
    } else if (c < smallest) {
        smallest = c;
    }
    return smallest
}
console.log(smallestNum2(4, 4, 4))
console.log(smallestNum2(4, 5, 2))

//3rd way-->
// let arr = [4, 2, 3]
let arr = [4, 4, 4]
let arrSort = arr.sort()
console.log("Smallest number", arrSort[0])


//4th way-->
function smallestNumber(a, b, c) {
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 'please enter valid input!'
    }
    if (a < b && a < c) {
        return a;
    }
    if (b < c && b < a) {
        return b;
    }
    if (c < b && c < a) {
        return c;
    }
}
// console.log(smallestNumber(-2, "Fsd", "fsadf")) -->important
