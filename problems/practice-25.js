// // ***********PROBLEM-25***************
//============= Write a program that transposes a given matrix(swaps rows with columns) ================
// Input: 2 Dimensional array (symmetric matrix)
// Output:  *Transposed matrix
// Example
// 1.[
//    [a,b],
//    [cd],
//    [e,f]
//           ]
//  --> [ [a,c,e],
//       [b,d,f]  ]

// 2. [
//        [3,4,8],
//        [5,6,7]
//      ]

// --> [
//       [3,5]
//       [4,6]
//       [8,7]
//            ]


// ========== solution ===============
// 1. calculate number of rows and columns
// 2.initiate  a new array
// 3. Loop through all the elements of an array and assign the value to new array
// 4. Make sure while assignment column index becomes row index and vice versa 


const arr = [
    [3, 4, 8],
    [5, 6, 7]
];
// 1st way ->
// function transposesMatrix(arr) {
//     let result = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         let row = [];
//         for (let j = 0; j < arr.length; j++) {
//             row.push(arr[j][i]);
//         }
//         result.push(row)
//     }
//     return result;
// }
// console.log(transposesMatrix(arr));

// 2nd way ->
function transposesMatrix(arr) {
    // console.log(arr)
    const numberOfRows = arr.length;
    const numberofColumns = arr[0].length;
    // console.log(numberOfRows, numberofColumns)
    const result = [];
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberofColumns; j++) {
            if (!result[j]) {
                result[j] = [];
            }
            result[j][i] = arr[i][j];
        }
    }
    return result;
}
console.log(transposesMatrix(arr));

// take another example for practice