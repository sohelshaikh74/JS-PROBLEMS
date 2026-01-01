// ***********PROBLEM-1***************
//=============Write a program that prints 'Hello World' on the console================
// console.log('Hello World')

// ***********PROBLEM-2***************
//============write a function that takes two  numbers as input and print their sum===================
// 1st way->function addTwoNumber(num1, num2) {
//     return num1 + num2
// }
// console.log("Sum of Two Number:", addTwoNumber(5, 6))

// 2nd way->
// const addTwoNumber = (num1, num2) => num1 + num2
// console.log("Sum of two number", addTwoNumber(5, 6))

//3rd way->
function sum(a, b) {
    let sum = a + b;
    // console.log(sum)
}
// sum(5, 6)
// sum(-1, -2)  //-1 + -2
// sum(-10, 5)
// sum(2.5, 2.5)
// sum(9)
// sum(1, "2")
// sum(true, "2")
// sum(null, "2")  (null-->0) ouptput-->
//    2
//++++explantaiton++++
//⚡ Step by step:
// a = 1(number)
// b = "2"(string)
// The + operator in JavaScript is special:
// If both are numbers → it does numeric addition.
// If one is a string → it does string concatenation.

// 4th way--> important
//write a function that take two input and print their sum
function addTwoNumber(a, b) {
    a = Number(a)
    b = Number(b)
    if (isNaN(a) || isNaN(b)) {
        console.log('Invalid input!')
        return;
    }
    let result = a + b;
    console.log(result)
}
// addTwoNumber(5, 6)
// addTwoNumber(5, -1)
// addTwoNumber(-2, -1)
// addTwoNumber(-2, "fsadf")
// addTwoNumber(-2, "10")


// ****************** PROBLEM-3 *************************
// ========================== write a function that calculates and print 
// the area of rectangle gives it length and width =================
// +++ formula Arae = length * width  +++++++++++ REMEMBER THIS FORMULA
function calcRectangle(length, width) {
    if (length <= 0) {
        throw new RangeError("Length should be a positive number")
    } else if (width <= 0) {
        throw new RangeError("Widht should be a positive number")
    }
    let area = length * width
    console.log('Area of Reactangle is', area)
}
// calcRectangle(5, 6)
// calcRectangle(500, 556)
// calcRectangle(-2, 350)//---> very important
calcRectangle(2, -350)//---> very important
calcRectangle(2, 0)//---> very important


//2nd way-->
function calcRectangle(lengt, widht) {
    lengt = Number(lengt)
    widht = Number(widht)
    if (isNaN(lengt) || isNaN(widht)) {
        console.log('invalid input!')
        return;
    }
    if (lengt < 0 || widht < 0) {
        console.log('Should be positive input')
        return;
    }

    let result = lengt * widht;
    console.log(result)
}
// calcRectangle(5, 6)
// calcRectangle(5, -6)
// calcRectangle(5, "10")
//  calcRectangle(5, "fds") --> important