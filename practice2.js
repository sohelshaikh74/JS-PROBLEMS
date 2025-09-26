let mySym = Symbol("kye1")
let obj = {
    name: "john",
    age: 25,
    [mySym]: "kye 1"
}
Object.freeze(obj)
obj.age = 30
console.log(obj)