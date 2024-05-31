/** Destructuring And Rest

    *todo Destructuring: phân rã - cách thuận tiện để lấy giá trị ra khỏi object và array

    *todo Toán tử rest: toán tử 3 chấm - lấy ra những phần còn lại trong object và array

    *todo Phân biệt toán tử Rest và Spread

        *todo Toán tử Rest: được sử dụng trong 2 trường hợp đó là khi bạn kết hợp với Destructuring hoặc trong trường hợp định nghĩa ra tham số
        *todo Các trường hợp còn lại là toán tử Spread
*/

var array = ["JavaScript", "Php", "Ruby"];
// var a = array[0];
// var b = array[1];
// var c = array[2];
//!Destructuring
var [a, b, c] = array;
console.log(a, b, c);

//!Rest
var [d, ...rest] = array;
console.log(d);
console.log(rest);

var course = {
    name: "javascript",
    description: "Khóa học cơ bản",
    price: 1000,
    children: {
        name: "python"
    }
}
var { name, price1, ...rest } = course;
var { name: parentName, children: { name } } = course;

console.log(name, price1);
console.log(rest);
console.log(parentName);
console.log(name);

function logger(...param) {
    return param
}
console.log(logger("java", "python", "php"))