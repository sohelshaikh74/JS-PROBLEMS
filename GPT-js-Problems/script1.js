// //Q1 – Remove Duplicates (Array + Set + Logic)
// const arr = [1, 2, 3, 2, 4, 5, 1];
// //built in
// // let uniqueArray = new Set(arr);
// // console.log([...uniqueArray]);

// //without built in
// let uniqueArray2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray2.includes(arr[i])) {
//         uniqueArray2.push(arr[i]);
//     }
// }
// // console.log(uniqueArray2);

// // Q2 – Count frequency of characters
// let str = "programming";
// function countFrequency(str) {
//     let strArr = str.split("");
//     console.log(strArr);
//     let results = {};
//     for (let s of strArr) {
//         if (results[s]) {
//             results[s]++;
//         } else {
//             results[s] = 1;
//         }
//     }
//     console.log(results)
// }
// countFrequency(str);
// // Fix 2 (pro level one-liner)
// // for (let s of str) {
// //     results[s] = (results[s] || 0) + 1;
// // }



// // Q3 – Flatten array (very common interview)
// const arr2 = [1, [2, 3], [4, [5, 6]]];
// // console.log(arr2.flat(3));
// // i am not able to do witout built in method

// //Q4 – this keyword (tricky)
// const obj = {
//     name: "Sohel",
//     show() {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 1000);
//     }
// };
// // obj.show(); //undefined
// // why -> the callback function setTimeout it is a regular funciton
// // and this context of regular function are always pointing to the global window
// // obect and in the global objet we don't have name property that's we get undefined


// // Q5 – Real world (API style)
// const users = [
//     { id: 1, name: "A", active: true },
//     { id: 2, name: "B", active: false },
//     { id: 3, name: "C", active: true }
// ];
// let names = users.filter((e) => e.active).map(el => el.name);
// console.log(names);


// =================================== ###### =========================
// Problem 1 – Active Users (API Response filtering)
const users = [
    { id: 1, name: "Sohel", age: 23, active: true },
    { id: 2, name: "Amit", age: 28, active: false },
    { id: 3, name: "Rahul", age: 25, active: true },
    { id: 4, name: "Neha", age: 30, active: true }
];
//get only active users
//Returns only nmaes
//sort by the age ascending
let names = users.filter(el => el.active).sort((a, b) => a.age - b.age).map(el => el.name);
// console.log(names);

//Problem 2 – Order Total (E-commerce style)
const cart = [
    { name: "Laptop", price: 50000, qty: 1 },
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1500, qty: 1 }
];

// let totalBill = cart.map((ele) => ele.price * ele.qty).reduce((acc, ele) => acc + ele, 0);
let totalBill = cart.reduce((acc, ele) => acc + ele.price * ele.qty, 0);
console.log(totalBill);

//Problem 3 – Group By Role (Very common backend task)
const employees = [
    { name: "A", role: "dev" },
    { name: "B", role: "hr" },
    { name: "C", role: "dev" },
    { name: "D", role: "manager" }
];
//expected
// {
//   dev: ["A", "C"],
//   hr: ["B"],
//   manager: ["D"]
// }

let results2 = employees.reduce((acc, ele) => {
    if (!acc[ele.role]) {
        acc[ele.role] = [];
    }
    acc[ele.role].push(ele.name);
    return acc;
}, {})
// console.log(results2)

//Problem 4 – Remove duplicate objects
const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
    { id: 1, name: "Phone" }
];
//expected
// [
//   { id: 1, name: "Phone" },
//   { id: 2, name: "Laptop" }
// ]
let seen = new Set();
let uniqueProducts = products.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true
})
console.log(uniqueProducts)

//Problem 5 – Dashboard Stats (Real company logic)
const orders = [
    { id: 1, status: "delivered", amount: 500 },
    { id: 2, status: "pending", amount: 800 },
    { id: 3, status: "delivered", amount: 400 },
    { id: 4, status: "cancelled", amount: 200 }
];

//expecetd
// {
//   totalRevenue: 900,
//   deliveredCount: 2,
//   pendingCount: 1
// }

let dashboardStats = {
    totalRevenue: 0,
    deliveredCount: 0,
    pendingCount: 0
};
for (let order of orders) {
    if (order.status === "delivered") {
        dashboardStats.totalRevenue += order.amount
        dashboardStats.deliveredCount++
    }
    if (order.status === "pending") {
        dashboardStats.pendingCount++;
    }
}

//using reduce method
// let stats = orders.reduce((acc, o) => {
//   if (o.status === "delivered") {
//     acc.totalRevenue += o.amount;
//     acc.deliveredCount++;
//   }
//   if (o.status === "pending") {
//     acc.pendingCount++;
//   }
//   return acc;
// }, {
//   totalRevenue: 0,
//   deliveredCount: 0,
//   pendingCount: 0
// });

console.log(dashboardStats)

