/**
 * todo promise methods
    1. Promise.resolve();
    2. Promise.reject();
    3. Promise.All();
 */

var promise = Promise.resolve('Chúc bạn may mắn lần sau');
promise.then(function(resolve) {
    alert(resolve);
})
var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        console.log([1]);
        resolve([1]);
    }, 2000)
})
var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        console.log([2, 3]);
        resolve([2, 3]);
    }, 5000)
})
Promise.all([promise1, promise2])
    .then(function(resolve) {
        var result = resolve[0];
        var result2 = resolve[1];
        console.log(result.concat(result2));
    })