const employees = [
    { name: "Alice", age: 32, position: "Software Engineer" },
    { name: "Bob", age: 25, position: "Product Manager" },
    { name: "Charlie", age: 28, position: "Designer" },
];

//1.sorting an array of Object by a property
//given array of object represting employee,sort them by their age property in ascending order.
let sortAge = employees.sort((a, b) => {
    return a.age - b.age;
})
console.log(sortAge)



const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Smartphone", price: 800 },
    { id: 103, name: "Tablet", price: 400 },
];
//2.Finding an object in An Array
//Given Array of products, find the product that has specific id.
//find the product with id=102
let productWithID = products.filter((prod) => prod.id === 102)
console.log(productWithID)

const students = [
    { name: "John", grade: "A" },
    { name: "Jane", grade: "B" },
    { name: "Tom", grade: "A" },
    { name: "Lucy", grade: "C" },
    { name: "Mike", grade: "B" },
];

//3. Group Object by Property
//Given an array of student with their grades, group them by their grade
let groupStudentByGrade = students.filter((st) => {
    if (st.grade === 'A') {
        return st.grade;
    }
})
console.log(groupStudentByGrade) //soultion might be wrong

//4.Calculate the Total value of Object in an Array
//Given an array of proudcts with their price and quantity,calculate the total value of the inventory.
const inventory = [
    { product: "Laptop", price: 1200, quantity: 5 },
    { product: "Smartphone", price: 800, quantity: 10 },
    { product: "Tablet", price: 400, quantity: 15 },
];
//calculate the total value the inventory
let sum = 0;
let totalValueOfInventroy = inventory.map((prod) => {
    let result = prod.price * prod.quantity;
    sum += result
})
console.log(sum)

//5.Find the object with maximum value of Property
//Given an array of object representing products with their price
const products2 = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Smartphone", price: 800 },
    { id: 103, name: "Tablet", price: 400 },
];
//task:Find the product with the highest price
// let firstHighestPrice = products2[0].price;
// console.log(firstHighestPrice)
// let highestPriceProduct = products2.filter((prod) => {
//     if (firstHighestPrice < prod.price) {
//         return firstHighestPrice = prod.price;
//     } else {
//         return firstHighestPrice;
//     }
// })
// console.log("5-->", highestPriceProduct)
// another try with find() method
// let highestPriceProduct = products2[0].price;
// let result = products2.find((prod) => {
//     if (prod.price > highestPriceProduct) {
//         return highestPriceProduct = prod.price
//     } else {
//         return highestPriceProduct
//     }
// })
// console.log(result)

//another try with forEach() method
let result = []
let firstHighestPrices = products2[0].price
products2.forEach((prod) => {
    if (prod.price > firstHighestPrices) {
        firstHighestPrices = prod.price
        // console.log(firstHighestPrices)
    } else {
        // console.log(firstHighestPrices)
    }
})

//6.Remove of an Object from an Array
//Given an array of ueser,remove the user with a specifi id.
const users = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 32 },
    { id: 3, name: "Tom", age: 25 },
];
//task:Remove the user with id=2;
let removedUser = (u) => {
    let index = u.findIndex((u) => u.id == 2)
    u.splice(index, 1)
    return u;
}
console.log("6-->", removedUser(users))


//7.Map and Modify Array of Objects
// Given array of student with their marsk,create a new array where each student's mark is increased by 10%
const students2 = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 70 },
    { name: "Charlie", marks: 90 },
];
//Task:Create a  new array with marks increased  by 10%
let marksIncreasedBy = students2.map((st) => {
    let result = st.marks + 0.0010;
    return result
})
console.log(marksIncreasedBy)

//8.Find a unique values in an array of Objects
// Given an array of object,find all unique value for a specifi property(name)
const people = [
    { name: "Alice", age: 32 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 28 },
];
