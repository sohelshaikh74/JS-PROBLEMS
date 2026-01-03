//merge alternative thiw two values eg-> a='demo', b=120=> output=>d1e0m0o
let abc = "sohel";
const xml = 1000;

//next interchange
// let abc = 1000;
// const xml = "sohel";

const mergerTwoValues = (a, b) => {
    if (typeof a !== 'string') {
        a = String(a);
    } if (typeof b !== 'string') {
        b = String(b);
    }
    let maxLen = Math.max(a.length, b.length)
    let result = ""
    for (let i = 0; i < maxLen; i++) {
        if (a[i]) {
            result += a[i]
        } if (b[i]) {
            result += b[i]
        }
    }
    console.log(result);
}
mergerTwoValues(abc, xml);