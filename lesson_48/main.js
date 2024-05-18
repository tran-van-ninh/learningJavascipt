var inputValue;
var inputElement = document.querySelector('input[type="text"]');
var input1Element = document.querySelector('input[type="checkbox"]');
var selectElement = document.querySelector('select');
console.log(input1Element);
inputElement.onchange = function(event) {
    inputValue = event.target.value;
    console.log(inputValue);
};
input1Element.onchange = function(event) {
    console.log(event.target.checked);
}
selectElement.onchange = function(event) {
    console.log(event.target.value);
}
inputElement.onkeyup = function(event) {
    console.log(event.target.value);
    console.log(event.which);
    if (event.which === 68) {
        console.log('bạn đã đúng');
    } else {
        console.log('bạn đã sai');
    }
};