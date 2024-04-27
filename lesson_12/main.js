/** Kiểu dữ liệu
    1. Dữ liệu nguyên thủy
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
    2. dữ liệu phức hợp
        - Function
        - Object
 
 */

// Number
var a = 1;
var b = 2;
console.log(typeof a )
// String
var fullName ="Ninh Trần"

// Boolean
var isSuccess = false; 

// Undefined
var age;
console.log(age)

// Null
var isNull = null;

// Symbol
var id = Symbol("id"); //unique

// Funtion
var myfunc = function(){
    alert("Hi chào các em");
}

// Object
var myObject = {
    name: "Ninh",
    age: 26,
    address: "Thái Bình"
}

console.log("myObject " + myObject)

var myArray = [
    "javascript",
    "python",
    "php"
]

console.log("myArray " + myArray)