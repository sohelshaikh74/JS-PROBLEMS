let arr = [2, 5, 7, 3, 1, 2, 3];
console.log(arr.sort());
let result = arr.sort((a, b) => {
    return a - b;
})
let res = new Set(result);
console.log([...res])