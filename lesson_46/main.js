//!Các Method thường sử dụng nhất 
/**
    1. add
    2. contains
    3. remove
    4. toggle
 */
var boxElement = document.querySelector('.box');
console.log(boxElement.classList);
console.log(boxElement.classList.length);
//boxElement.classList.add('red');
console.log(boxElement.classList.length);
console.log(boxElement.classList.value);
console.log(boxElement.classList.contains('red'));
//boxElement.classList.remove('red');
// setInterval(() => {
//     boxElement.classList.toggle('hidden');
// }, 1);