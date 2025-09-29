// ***********PROBLEM-14***************
//=============Write a function  that calculates and prints the simple interest on loan amount ================
//input:
// principle amount
//interest rate (yeraly)
//time duration (how many years)
//Return: interest
//formula:(principle * interest rate* time duration)/100
// eg. 1000, 5%, 1 year=(1000*5*1)100==>50 interest
// eg. 2000, 10%, 5 year=(1000*5*1)100==>50 interest

function calcualateSimpleInterest(principleAmount, interestRateYearly, durationYears) {
    principleAmount = Number(principleAmount)
    years = Number(durationYears)
    if (isNaN(principleAmount) || isNaN(durationYears)) {
        return 'Please enter only numbres'
    }
    let result = principleAmount * interestRateYearly * durationYears / 100
    return result.toFixed(2);  //fraction digit eg 1.5==>1.50
}
console.log("1000,5%,1 year", calcualateSimpleInterest(1000, 5, 1,))
console.log("2000,10%,5 year", calcualateSimpleInterest(2000, 10, 5,))
console.log("2000,10%,5 year", calcualateSimpleInterest(2088, 8.555, 5,))