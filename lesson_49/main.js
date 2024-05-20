// Dom events
/**
    1. preventDefault
    2. stopPropagation
 */
var aElement = document.anchors;
console.log(aElement);

var aElement1 = document.links;
console.log(aElement1);
for (var item of aElement1) {
    item.onclick = function(event) {
        console.log(event.target.href);
        if (!event.target.href.startsWith("https://f8.edu.vn")) {
            event.preventDefault();
        }
    }
}
var ulElement = document.querySelector('ul');
console.log(ulElement);
ulElement.onclick = function(event) {
    console.log(event.target);
};

ulElement.onmousedown = function(event) {
    event.preventDefault();
}
document.querySelector('div').onclick = function(event) {
    console.log('DIV')
}
document.querySelector('button').onclick = function(event) {
    event.stopPropagation();
    console.log('Click me!')
}