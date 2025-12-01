// ***********PROBLEM-20***************
//=============Write a program that prints number from 1 to N, Replacing ================
//condition:
// 1) multiple of 3 with  "Fizz" ,
// 2) Multiple of 5 with 'Buzz',
// 3) Multiple of  both 3 & 5 with 'FizzBuzz',
// input: A positive number
// eg:36 (print 1 to 36 and apply condition over here like 3 and 5 and both )
// 1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fiizz","FizzBuzz",etc


// function fizzBuzz(inputNumber) {
//     inputNumber = Number(inputNumber)
//     if (isNaN(inputNumber)) {
//         console.log('please enter valid input')
//         return;
//     }
//     if (inputNumber < 0) {
//         console.log('number should be positive')
//         return
//     }
//     if (inputNumber === 0) {
//         console.log("numbre should greater than 0")
//         return;
//     }
//     for (let i = 1; i <= inputNumber; i++) {
//         if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
//         else if (i % 3 == 0) console.log('Fizz')
//         else if (i % 5 == 0) console.log("Buzz")
//         else console.log(i)
//     }
// }
function fizzBuzz(inputNumber) {
    inputNumber = Number(inputNumber);
    if (isNaN(inputNumber)) return 'please enter valid input';
    if (inputNumber <= 0) return 'number should be greater than zero';

    for (let i = 1; i <= inputNumber; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(36);

// fizzBuzz(36)
fizzBuzz(-36)
// fizzBuzz(0)

