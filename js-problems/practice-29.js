// ***********PROBLEM-29***************
// PROBLEM STATEMENT ==> TIP CALCULATOR
// ==================== write a program that calculates the tip amounts based on the bill total and percentage entered by the user ==============
//  Input -> Total amount, Tip percentages
// Output -> Different Tip amounts
//eg:
// Input ->
//      Amount: 1000
//      Tip percentage:[5,10,15]
//      Output: Different Tip amounts
//      {5:50,10:100,15:150}  OR [50,100,150]

function calculateTipAmount(baseAmount, tipPercentages) {
    let result = [];
    for (let i = 0; i < tipPercentages.length; i++) {
        let tipAmount = baseAmount * tipPercentages[i] / 100;
        tipAmount.toFixed(2)
        result.push(tipAmount);
    }
    return result;
}
console.log("1000,[5,10,15]", calculateTipAmount(1000, [5, 10, 15]))
console.log("997,[5,10,15]", calculateTipAmount(997, [5, 10, 15]))