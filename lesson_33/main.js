var array = ['a', 'b', 'c', 'd', 'e', 'f', 'a','b','c'];
console.log(array);
console.log(new Set(array));
console.log([...new Set(array)]);

function countDown(num){
    if(num > 0){
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);

function deQuy(number){
    if(number > 0){
        return number*deQuy(number-1);
    }
    return 1;
  
}
console.log(deQuy(3));