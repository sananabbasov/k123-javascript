'use strict'
// Data Types

// Number
var num = 5
// yazi = string
var text = "Test"
// Boolean
var check = false
// Undefined
var find = undefined
// Null
var data = null
// NaN
var result = num - find
// Bigint
var bignumber = BigInt("464988998988979879")
// Object
// 1. Array
var myArr = [6, "Araz", "Vusal", true, "Qudret", NaN, "Ibrahim"]
var myArr2 = [
    ["x", "o", "x"],
    ["x", "o", "x"],
    ["o", "x", "o"],
]

// console.log(myArr[1])
// console.log(myArr2[0][1])

// 2. Object

// var users = [
//     {
//         name: "Qudret",
//         age: 29,
//         skils: ["HTML","CSS", "JavaScript", "SQL", "C#"]
//     },
//     {
//         name: "Vusal",
//         age: 19,
//         skils: [ "SQL", "C#"]
//     }
// ]


// console.log(users[0].name);
// console.log(users[1].age);


// 3. Date

// var date = new Date()
// console.log(date);

// text = 56

// console.log(text);
// console.log(result);
// var testDataTypes;
// var testDataTypesNull = null
// console.log(null);

// var a = "5";
// var b = 5;
// console.log(a === b);

// if ("a" == "a") {
//     console.log("Success");
// }else{
//     console.log("Error");
// }



// var a = 5
// var b = 3
// var c = 4


// b = c
// a = b


// console.log(a);


var a = [1, 3, 5]
var b = [2, 4, 6]
var c = [20, 30, 40]

console.log(a); // 1, 3, 5
console.log(b); // 2, 4, 6
console.log(c); // 20, 30, 40

console.log("______________");
a = b
b = c
b[0] = 100

console.log(a);
console.log(b);
console.log(c);

