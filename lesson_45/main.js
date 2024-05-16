var boxElement = document.querySelector('.box');
console.log(boxElement.style);
console.log([boxElement]);
boxElement.style.width = '300px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';
Object.assign(boxElement.style, {
    with: '200px',
    height: '300px',
    backgroundColor: 'green'

})
console.log(boxElement.style);