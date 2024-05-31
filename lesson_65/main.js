var array1 = ["javascript", "pythons", "php", "ruby"];
var array2 = ["ReactJS", "NodeJS"];
var array3 = [...array2, ...array1];
console.log(array3);

var object1 = {
    name: "Ninh Trần",
    age: 26,
    address: "Thái Bình"
}
var object2 = {
    ...object1,
    name: "Trần Văn Ninh",
    email: "dinhmanhninhtt@gmail.com"
}

console.log(object2);