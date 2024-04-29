/**
 * todo Làm việc với chuỗi
    1. length
    2. Find index 
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index
 */
var myString = 'Học js tại js js f8        '
console.log(myString.length);

//fine index
console.log(myString.indexOf('ABC'));//! vị trí ABC đầu tiên trong chuỗi
console.log(myString.indexOf('js'));//! vị trí js đầu tiên trong chuỗi
console.log(myString.indexOf('js',7))//!tìm js trong chuỗi xét từ vị trí số 7
console.log(myString.lastIndexOf('js'));//! tìm js ở vị trí cuối cùng

//cut string
console.log(myString.slice(-3));

//replace
console.log(myString.replace(/js/g, 'javascript'));
// convert upper case, lower case
console.log(myString.toUpperCase())

//trim
console.log(myString.trim())

//split 
var language = 'javascript, java, php, ruby, python';
console.log(language.split(', '));

// get a character by index
const myString2 = 'Ninh trần';
console.log(myString2.charAt(-1));

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'