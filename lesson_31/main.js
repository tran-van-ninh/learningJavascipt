//! Toán tử 3 ngôi
//! Ternary operator
var courses = {
    name: 'javascript',
    coin: 0
}

if(courses.coin > 0){
    console.log(`Courses: ${courses.coin} coin`);
}else{
    console.log('Miễn phí');
}

var result = courses.coin > 0 ? `Courses1: ${courses.coin} coin` : 'Miễn phí';
console.log(result);

// Làm bài
function getCanVoteMessage(age){
    var result = age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
