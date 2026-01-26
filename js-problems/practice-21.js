// ***********PROBLEM-21***************
//=============Write a program that prints a number pyramid ================
//input : A Number
// Output: Number Pyramid
//eg. 5
//                    1
//                   121
//                  12321
//                 1234321
//                123454321

function pyramid(input) {
    input = Number(input)
    if (isNaN(input)) console.log('Input shoudl be number')
    if (input < 0) {
        console.log('Number Should be positive')
    }
    for (let i = 1; i <= input; i++) {
        let lineContent = "";
        for (let space = 1; space <= input - i; space++) {
            lineContent = lineContent + " ";
        }
        for (let count = 1; count <= i; count++) {
            lineContent = lineContent + count;
        }
        for (let revCount = i - 1; revCount >= 1; revCount--) {
            lineContent = lineContent + revCount;
        }
        console.log(lineContent)
    }
}

pyramid(5);