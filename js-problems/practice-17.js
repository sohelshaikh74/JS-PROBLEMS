// ***********PROBLEM-17***************
//=============Write a function  that convert temperature in celcius to Fahrenheit ================
//input:Temperatur in Celsius
//Celsius and Fahrenheit are two different scales two messaure temperature
//Formula (Temperature in degree Celsius ( (c)*9/5)+32 )
// eg. 27 Degree = (27*9/5)+32==>80.6 Fahrenheit
// eg. 34 Degree = (34*9/5)+32==>93.2 Fahrenheit

// 1st way-->
function fahrenteiit(celcius) {
    let result = (celcius * 9 / 5) + 32
    return result
}
// console.log("27 degree celsius convert into ", fahrenteiit(27), "Fahrentheit")


// 2nd way-->
function convertToFahrenheit(temperatureInCelsius) {
    //validation
    if (temperatureInCelsius < 0) {
        return 'please enter postive input'
    }
    let result = (temperatureInCelsius * 9 / 5) + 32
    return Math.round(result);
}
console.log("27 is", convertToFahrenheit(27), "In fahrentheit")
console.log("34 is", convertToFahrenheit(34), "In fahrentheit")