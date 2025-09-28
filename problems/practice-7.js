// ***********PROBLEM-9***************
//============ write a function that generates and prints a multiplication table for a given number up to a specified range ===================


//1st way-->
function printMultiplicationTable(tableOf, tableTill) {
    //convert to  number first
    tableOf = Number(tableOf);
    tableTill = Number(tableTill);

    //validation

    if (isNaN(tableOf) || isNaN(tableTill)) {
        console.log('Invalid input! please enter valid number.')
        return;
    }
    if (tableOf <= 0 || tableTill <= 0) {
        console.log("numbers should be a positive and greater than zero.")
        return;
    }
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf}X${i}=${tableOf * i}`)
    }
}
//test cases
printMultiplicationTable(5, 25)
printMultiplicationTable(5, "fdadfs")
printMultiplicationTable("dsafd", "fdadfs")
printMultiplicationTable("dsafd", "5")
printMultiplicationTable("5", "10")
printMultiplicationTable("5", -5)

//2nd way-->
function printMultiplicationTable2(tableOf, tableTill) {
    for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) { //--this part is important
        console.log(i)
    }
}
// printMultiplicationTable2(3, 10)
// printMultiplicationTable2(8, 20)