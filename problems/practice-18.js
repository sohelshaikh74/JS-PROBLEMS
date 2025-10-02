// ***********PROBLEM-18***************
//=============Write a program that swap two numbers ================
//input: Two numbers a and b
//output: Interchange the values of a and b
// eg: input a=5, b=6
//output: a = 6, b = 5

function swapTwoNumber(a, b) {
    //validate
    a = Number(a)
    b = Number(b)
    if (isNaN(a) || isNaN(b)) {
        console.log('Please enter valid inputs')
        return;
    }
    console.log(`Before swapping a:${a} and b:${b} without using third variable`)
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After swapping a:${a} and b:${b} without using third variable`)
}
/*
swapTwoNumber(5, 6)
swapTwoNumber("5", 6)
swapTwoNumber("5", "fsd")
swapTwoNumber(0, 0)
swapTwoNumber(0, null)
swapTwoNumber(0, true)
*/


function swapTwoNumber2(a, b) {
    //validate
    a = Number(a)
    b = Number(b)
    if (isNaN(a) || isNaN(b)) {
        console.log('Please enter valid inputs')
        return;
    }
    console.log(`Before swapping a:${a} and b:${b} without using third variable`)
    let c = a + b;
    a = c - a;
    b = c - a;
    console.log(`After swapping a:${a} and b:${b} without using third variable`)
}
swapTwoNumber2(5, 6)