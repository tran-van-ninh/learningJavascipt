/**
 * ! DOM events
    1. Attributes events
    2. Assign event using the element node
 */
var h1Elements = document.querySelectorAll('h1');
for (var item of h1Elements) {
    item.onclick = function(event) {
        console.log(event.target);
    }
}
var buttonElement = document.querySelector('button');
buttonElement.onclick = function(event) {
    event.target.style.backgroundColor = '#fff';
}