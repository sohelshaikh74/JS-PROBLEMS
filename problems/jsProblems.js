// ================ problem --> 1 ======================
//write a funtion that seperate string,character and number and print as array
let arr = [100, 'q', 'sohel', 10, 8, 'c']
let seperate = (arr) => {
    let character = []
    let string = [];
    let number = []
    arr.forEach(element => {
        if (typeof element === 'number') {
            number.push(element)
        }
        else if (typeof element === 'string') {
            if (element.length > 1) {
                string.push(element)
            } else character.push(element)
        }
    });
    console.log(number)
    console.log(string)
    console.log(character)
}
seperate(arr)