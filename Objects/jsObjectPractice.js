// let user = {
//     name: "sohel",
//     age: 23,
//     job: "Developer"
// }


// //keys
// // console.log(Object.keys(user))

// //values
// // console.log(Object.values(user))

// //Entries
// // console.log(Object.entries(user))

// //Assign and concat (What it does: Copies properties from one object to another.)
// // let newUser = Object.assign({}, user, { country: "India" })
// // console.log(newUser)


// //Freeze
// // Object.freeze(user)
// user.age = 30;  //chnage won't work
// // console.log(user)


// //Object.entries()
// // Best for converting object -> array or looping both keys and values
// for (let [key, value] of Object.entries(user)) {
//     // console.log(`${key}:${value}`)
// }

// // let extra = { country: "India", language: "Hindi" }
// // let newUsers = Object.assign({}, extra)
// // console.log(newUsers)

// console.log(user)
// console.log("property", Object.hasOwn(user, "age"))

let obj = { name: "john", age: 23, job: "Developer" }
// console.log(obj["name"])
//iteration on object
for (let key in obj) {
    // console.log(key, obj[key])
}


Object.keys(obj).forEach((user) => {
    // console.log(user)
})

Object.entries(obj).map(([key, value]) => {
    // console.log(key, value)
})


//Iterating Array of nested objects
let students = [
    { name: "john", subject: ["math", "english"] },
    { name: "sarah", subject: ["Science", "History"] }
]

for (let student of students) {
    // console.log(student.name)
    for (let subject of student.subject) {
        // console.log(subject)
    }
}

//iterating nested Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let row of matrix) {
    for (let value of row) {
        // console.log(value)
    }
}


//iterating nested Object
let company = {
    name: "Tech Crop",
    employees: {
        e1: { name: "john", role: "Developer" },
        e2: { name: "doe", role: "Tester" }
    }
}

for (let key in company.employees) {
    console.log(key, company.employees[key])
}