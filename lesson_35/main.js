const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reduceMethod(arr){
    const result = arr.reduce((total, number)=>{
        return total + number;
    })
    console.log(result);
}

reduceMethod(numbers);

function creatMedthodReduce(arr){
    Array.prototype.reduce1 = function(callback, result){
        let i=0
        if(arguments.length < 2){
            i = 1;
            result = this[0];
        }
        for(; i<this.length; i++){
            result = callback(result, this[i], i ,this);

        }
        return result;
    }
    const result = arr.reduce1((total, number)=>{
        return total + number;
    });
    console.log(result);

}
creatMedthodReduce(numbers);

function arrToObj(arr){
    return arr.reduce((a, b)=>{
        a[b[0]] = b[1];
        return a;
    },{});
}
// Expected results:
var arr = [
   ['name', 'Sơn Đặng'],
   ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }