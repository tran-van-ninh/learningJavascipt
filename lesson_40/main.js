var titleNote = document.querySelectorAll('.sub-title');
console.log(titleNote);
console.log(titleNote[1].querySelector('a').textContent);
console.log(titleNote[1].querySelector('a').innerHTML= 'hello world');
console.log(titleNote[1].getElementsByTagName('a'));
var htmlCollection = titleNote[1].getElementsByTagName('a');
for(var item of htmlCollection){
    item.innerHTML = 'Thay đổi';
}
document.querySelector('.heading').title = 'Hello World'
