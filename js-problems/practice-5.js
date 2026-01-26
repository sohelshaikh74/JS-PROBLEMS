// ***********PROBLEM-7***************
//============write a function that tells if provided year is a leap year or not===================
// 1st way-->
// function isLeapYear(year) {
//     year = Number(year)
//     if (isNaN(year)) {
//         return `Invalid input!`
//     }
//     if (year % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYear(2000))
// console.log(isLeapYear(2002))
// console.log("fadfa", isLeapYear("fadsfa"))/ -->important

//2nd way-->
const isLeapYear2 = (year) => {
    year = Number(year);
    if (isNaN(year)) return `Invalid input!`
    if (year % 4 === 0) return true;
    else return false;
}
console.log(isLeapYear2(3000))
console.log(isLeapYear2(3001))
console.log(isLeapYear2("fadas"))


// 3rd way-->
const isLeapYear3 = (year) => {
    if (isNaN(year)) return `Ivalid input!`
    return year % 4 === 0;
}
console.log(isLeapYear3(3001))
console.log(isLeapYear3("fasdsaf"))
