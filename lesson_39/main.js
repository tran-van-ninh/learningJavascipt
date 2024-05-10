var courses = [
    'javascript',
    'css',
    'python',
    'html',
    'angular'
];

//console.log(result);
//console.log(outPuts);
function creatMethod_forEach(arr){
    var outPuts = [];
    // Array.prototype.myForEach = function(callBack){
    //     var i = 0;
    //     for( var item of this){
    //         callBack(item, i, this);
    //         i++;
    //     }

    // }
    Array.prototype.myForEach1 = function(callBack){
        for( var i in this){
            if(this.hasOwnProperty(i)){
                callBack(this[i], i, this);
            }
        }
    };
    console.log(arr.myForEach1(function(item, i , array){
        console.log(item, i, array);
    }));
    // var result = arr.myForEach(function(item, index, array){
    //     outPuts.push(array);
    //     console.log(item, index, array)
    // })
    // console.log(outPuts);
    // console.log(result);
}
creatMethod_forEach(courses)
