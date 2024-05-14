// DOM Attribute
var heading = document.querySelector('h1');

// !setter với những thuộc tính mặc định
heading.title = 'ninh';
heading.className = 'Không có'
heading.id = 'ninh';

//! sử dụng method setAttribute() đưa một phương thức không hợp lệ vào một thẻ
heading.setAttribute('d', 'ninh');

//! Lấy ra value attribute
var valueAttribute = heading.getAttribute('title');
console.log(valueAttribute);
//Cách để lấy giá trị một thuộc tính