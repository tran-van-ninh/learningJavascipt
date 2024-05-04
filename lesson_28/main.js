console.log(Math.PI);
//! Làm tròn
console.log(Math.round(1.6));

//! tuyệt đối
console.log(Math.abs(-4));

//! Làm tròn trên
console.log(Math.ceil(4.1));

//! Làm tròn duói
console.log(Math.floor(4.8));

//! chọn số ngẫu nhiên
console.log(Math.random()*10);

function getRandomItem(arr){
    var index = Math.floor(Math.random()* (arr.length));
    console.log(index);
    return arr[index];
}

array = ['java', 'json', 'js', 'css', 'html', 'python']
console.log(getRandomItem(array));