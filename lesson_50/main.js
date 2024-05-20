/**
 * Todo DOM event
    1. Event Listener
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best practices
    9. Mistakes
    10. Performance
 */

/**
 * Todo
    1. Xử lý nhiều việc khi một event xảy ra
    2. Lắng nghe , hủy bỏ lắng nghe
 */
var btn = document.getElementById('btn');
console.log(btn);
// btn.onclick = function() {
//     console.log('Việc 1');
//     console.log('Việc 2');
// }
// setTimeout(function() {
//     btn.onclick = function() {}

// }, 3000);

function viec1() {
    console.log('Việc 1');
}

function viec2() {
    console.log('Việc 2');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000)