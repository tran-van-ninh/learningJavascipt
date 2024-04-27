var a = 1;
var b = 2;

var result = "A" && "B" && "C" && "D" && "E"
console.log(result);

if(a<b){
    console.log("Điều kiện đúng");
}else{
    console.log("Điều kiện sai")
}

var result1 = "A" && "B" ||  "C" && null && "E"
console.log(result1);