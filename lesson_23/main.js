/**

Các kiểu phương thức của Array :
toString() : chuyển mảng thành chuỗi
join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
pop() : xóa phần tử cuối mảng và trả về phần tử đó
push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
shift() : xóa phần tử đầu mảng và trả về phần tử đó
unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
splice(vị trí con trỏ | số phần tử cần xóa| thêm phần tử) : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
slice() : lấy ra một phần mảng mới từ mảng cũ
concat() : nối mảng mới vào mảng cũ
reverse() : đảo ngược mảng
sort() : sắp xếp mảng
*/ 
//const Arr = ["Java", "Javascript", "PHP", "Python", "C++"]; console.log(Arr.splice(0, 3, "Ruby", "C#")); console.log(Arr.sort()); console.log(Arr); console.log(Arr.reverse()); console.log(Arr.concat(["Java", "Javascript", "PHP", "Python", "C++"])); console.log(Arr.slice(0, 3)); console.log(Arr.shift()); console.log(Arr.unshift("Java")); console.log(Arr.pop()); console.log(Arr.push("C++")); console.log(Arr.join(" - ")); console.log(Arr.toString());


// const Arr = ["Java", "Javascript", "PHP", "Python", "C++"];
// console.log(Arr.splice(0, 3, "Ruby", "C#"));
// console.log(Arr.sort());
// console.log(Arr);
// console.log(Arr.reverse());
// console.log(Arr.concat(["Java", "Javascript", "PHP", "Python", "C++"]));
// console.log(Arr.slice(0, 3));
// console.log(Arr.shift());
// console.log(Arr.unshift("Java"));
// console.log(Arr.pop());
// console.log(Arr.push("C++"));
// console.log(Arr.join(" - "));
// console.log(Arr.toString());

var Languages = [
    'java',
    'javascript',
    'php',
    'python' 
]

// console.log(Languages.toString());
// console.log(Languages.join(' '));
// console.log(Languages.pop());
// function popArray(arr){
//     return arr.pop();
// }
// popArray(Languages);
// console.log(Languages);
// console.log(Languages.push('dart','c++'));
// console.log(Languages);
// console.log(Languages.shift());
// console.log(Languages.unshift('dart'));
// console.log(Languages);
// Languages.splice(1, 2);
// console.log(Languages);
var Languages2 = [
    'dart',
    'ruby'
]

console.log(Languages.concat(Languages2));
console.log(Languages);
console.log(Languages.slice(1,2));
console.log(Languages)
    
