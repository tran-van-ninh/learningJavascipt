var myInfo = {
    name: 'Ninh Trần',
    age: 26,
    address:'Thái Bình'
};

var languages = [
    'Javascript',
    'java',
    'python',
    'php',
]

var array = [1,15, 20,16];
function creatArray(){
    var results = [];
    for(var i = 0; i < 10; i++) {
        results.push(i);
        console.log(i);
    }
    console.log(results);
}
creatArray();

function sum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(arr);
    console.log(sum);
}
sum(array);

//Use a for loop to read the array
//sử dụng vòng lặp for đọc mảng
function readArray(arr){
    var arrLength = arr.length;
    for(var i = 0; i < arrLength; i++){
        console.log(arr[i]);
    }
}
readArray(languages);

//! Vòng lặp For/in and For/of

function showWithForIn(param){
    var arrKey = [];
    var arrValue = [];
    for(var key in param){
        
        arrKey.push(key);
        arrValue.push(param[key]);
    }
    console.log(arrKey);
    console.log(arrValue);
}
showWithForIn(myInfo);
showWithForIn(languages);

function showWithForOf(param){
    for(var value of param){
        console.log(value);
    }
}
showWithForOf(languages);
showWithForOf(Object.values(myInfo));

//! Vòng lặp While loop

function showArrayWithWhileLoop(arr){
    var arrLength = arr.length;
    var i = 0;
    while(i < arrLength){
        console.log(arr[i]);
        i++;
    }
}
showArrayWithWhileLoop(languages);

//! Vòng lặp Do / While Loop
function useDoWhileLoop(){
    var i = 0;
    var isSuccess = false;
    do{
        i++;
        console.log('Nạp thẻ lần ' + i);
        if(true){
            isSuccess = true;
        }
    }while(!isSuccess && i < 4);
}
useDoWhileLoop();

//! Break and Continue trong vòng lặp

function useBreakWithForLoop(){
    for(var i = 0; i < 10 ; i++){
        
        console.log(i);
        if(i > 5){
            break;
        }
    }
}
useBreakWithForLoop();
function useContinuteWithForLoop(){
    for(var i = 0; i < 10 ; i++){
        if(i % 2 > 0){
            continue;
        }
        console.log(i);
    }
}
useContinuteWithForLoop();

//! Vòng lặp lồng nhau
var myArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
];
for(var i = 0; i < myArray.length; i++){
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}

