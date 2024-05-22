/**
 * todo Promise
    1. Sync
    2. Async
 */

/**
    *todo Vấn đề
    1. Callback hell
    2. Pyramid of doom
 */

setTimeout(function() {
    console.log('Đây là việc 1');
}, 10)
console.log('Đây là việc 2');
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        //logic
        //! Thành công: resolve();
        //! Thất bại: reject();
        resolve('Bạn đã trúng thưởng')
    }
);

promise.then(function(pram1) {
        console.log('Thành công: ' + pram1);
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function() {
        console.log('Chúc bạn may mắn lần sau')
    })

function sleep(ms) {
    return new Promise(
        function(resolve) {
            setTimeout(resolve, ms)
        }
    )
}
sleep(1000).then(function() {
        console.log('Chúc mừng bạn đã ngủ 1s');
        return sleep(1000)
    })
    .then(function() {
        console.log('Chúc mừng bạn đã ngủ 2s');
        return sleep(1000);
    })
    .then(function() {
        console.log('Chúc mừng bạn đã ngủ 3s');
        return sleep(1000);
    })
    .then(function() {
        console.log('Chúc mừng bạn đã ngủ 4s');
    })
    .finally(function() {
        console.warn('Cảm ơn bạn đã tỉnh ngủ');
    })

console.log(console);