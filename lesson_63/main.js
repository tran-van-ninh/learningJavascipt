"use strict";
var name = "javascript";
var price = 1000;
var course = {
    name: name,
    price: price
}
var course1 = {
    name,
    price,
    getName() {
        return name;
    }
}
console.log(course);
console.log(course1);
console.log(course1.getName());
// Định nghĩa key cho object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";
var course = {
    [fieldName]: "python",
    [fieldPrice]: 1000
}
console.log(course);