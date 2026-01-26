// ===============1 creating object in different ways ================
//Object Literal
// (a) Object Literal (most common way)
let obj = {
    name: "john",
    age: 23,
    job: "Developer "
}
// *b)new Object() Constructor
let obj2 = new Object()
obj2.name = "Doe"
obj2.age = 56

// (c)Object.create()
// **** Creates a new object with a given prototype.
let proto = { greet: function () { console.log("Hello, World!") } }
let obj3 = Object.create(proto)
obj3.name = "sarah"

// (d) Class (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj4 = new Person("Rahul", 25);

// (e) Function Constructor (older way)
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let obj5 = new Person("Amit", 30);



// =========================2. Commonly Used Object Methods=================
//  Static Methods (Object.something())

Object.keys(obj) //→ Returns an array of property names (keys).

Object.values(obj) // → Returns an array of property values.

Object.entries(obj) //→ Returns an array of [key, value] pairs.

Object.assign(target, source) //→ Copies properties from one object to another (used for merging).

Object.freeze(obj) //→ Makes an object immutable (no adding, removing, or changing properties).

Object.seal(obj) //→ Prevents adding/removing properties, but allows modifying existing ones.

Object.create(proto) // Creates a new object with a specified prototype.

Object.hasOwn(obj, key) // Checks if the key exists directly on the object (not inherited).

Object.fromEntries(arr) //Converts [key, value] pairs back into an object.

// ✅ Instance Methods (obj.something())

obj.hasOwnProperty("key") //→ Checks if the object has the property (legacy but common).

obj.toString() //→ Converts object to a string representation.

obj.valueOf() //→ Returns the primitive value of the object.