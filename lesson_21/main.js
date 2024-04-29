/**
 * Todo kiểu number trong javascript
    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng các nào? Tại sao?
        - Kiểm tra data type
    
    2. Làm việc với Number
        - To string
        - To Fixed
 */
var age = 14;
var PI = 3.14;

var year = new Number(9);
console.log(age);
console.log(year);
console.log(typeof age);
console.log(age.toString());
console.log(PI.toFixed(1));
function isNumber(value) {
    return typeof value === 'number'&& value.toString()!= "NaN";
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false