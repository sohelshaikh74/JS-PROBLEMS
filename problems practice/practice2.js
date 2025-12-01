function fizzBuzz(inputNumber) {
    inputNumber = Number(inputNumber);
    if (isNaN(inputNumber)) console.log('please enter valid input');
    if (inputNumber <= 0) console.log('input Number should be greater than zero');
    for (let i = 1; i <= inputNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('fizzBuzz');
        else if (i % 3 === 0) console.log('fizz');
        else if (i % 5 === 0) console.log('buzz');
        else console.log(i);
    }
}
fizzBuzz(15);