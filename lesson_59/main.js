var name = "Ninh Trần";
var age = 26
var address = "Thái Bình";
var student = "name :" + name + ", age :" + age + ", address :" + address;
var student1 = `name: ${name} , age: ${age} , address: ${address}`
console.log(student);
console.log(student1);
document.querySelector(".container").innerHTML = student;