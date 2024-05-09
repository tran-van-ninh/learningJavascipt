// Create your own methods in the array
/**
 * ! 1. Map
 * ! 2. Reduce
 */

var myArray = [1, 2, 3, 4, 5, 6];
function creatmethodMapInArray(arr){
    Array.prototype.map2 = function (callBack){
        //console.log(this);
        var outPut = [];
        var arrLength = this.length;
        for(var i= 0; i < arrLength; ++i){
            var result = callBack(this[i], i);
            outPut.push(result);
        }
        // for(var i in this){
        //     var result = callBack(this[i], i);
        //     outPut.push(result);
            
        // }
        // console.log(outPut)
        
        return outPut;
    }
    arr.map2(function(a,b){
         a = 'Đây là cái quần què gì';
        console.log(a,b);
    });
}

creatmethodMapInArray(myArray);

function creatMethodReduceInArray(arr){
    Array.prototype.reduce1 = function(callback, result){
        let i = 0
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
creatMethodReduceInArray(myArray);

function creatMethodEveryInArray(arr){
    Array.prototype.every2 = function(callBack){
        var i = 0
        for(var item of this){
            if(!callBack(item , i, this)){
                return false;
            }
        }
        return true;
    }
    const result = arr.every2(function(item){
        return typeof item === 'number';
    })
    console.log(result);
}
creatMethodEveryInArray(myArray);

