var boxElement = document.querySelector('.box');
console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML);
boxElement.innerHTML = `<h1>Đây là web của tôi</h1>`;
boxElement.setAttribute('style','color:red');
document.querySelector('h1').innerText = 'Nội dung đã được thay đổi'; 