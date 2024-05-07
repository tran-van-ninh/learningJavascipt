/**
 * ! Array methods
    1. forEach(): Duyệt qua các phần tử của mảng
    2. every() : Kiểm tra các phần tử trong mảng có thỏa mãn một điều kiện nào đó không nếu có thì trả về true, và trả về false ngay khi có một phần tử không thỏa mãn và kết thúc hành động
    3. some(): Duyệt qua từng phần tử của mảng có 1 phần tử thỏa mãn trả về true,
    4. find(): Duyệt từng phần tử trong mảng tìm thấy 1 phần tử phù hợp điều kiện trả về phần tử và kết thúc chương trình, không có trả về undefined
    5. filter(): Duyệt từng phần tử tìm tất cả các phần tử phù hợp điều kiện và trả về kết quả, không có trả về undefined
    6. map(): chỉnh sửa hay thay đổi =>> trả về một mảng mới không làm thay đổi kết cấu mảng ban đầu
    7. reduce();
 */
var courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'html,css',
        coin: 0
    },
    {
        id: 3,
        name:'php',
        coin: 0
    },
    {
        id: 4,
        name:'ruby',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJs',
        coin: 500
    },
];

function forEachInArray(arr){
    arr.forEach(function (course, index) {
        console.log( index, course);  
    })
}
//forEachInArray(courses);

function everyInArray(arr){
    var isFree = arr.every(function (course, index) {
        console.log(index);
        return course.coin === 0;  
    });
    console.log(isFree);
}

//everyInArray(courses);

function someInArray(arr){
    var isFree = arr.some(function (course, index) {
        console.log(index);
        return course.coin === 0;  
    });
    console.log(isFree);
}
//someInArray(courses);

function findInArray(arr){
    var course = arr.find (function (course, index) {
        console.log(index);
        return course.coin === 0;  
    });
    console.log(course);
}
//findInArray(courses);

function filterInArray(arr){
    var course = arr.filter (function (course, index) {
        console.log(index);
        return course.coin === 0;  
    });
    console.log(course);
}
//filterInArray(courses);

function mapInArray(arr){
    var newCourse = arr.map(function (course, index, originArray) {
        //console.log(course);
        return {
            id: course.id,
            name: `Khóa học ${course.name}`,
            coin: course.coin,
            coinText: `Giá ${course.coin}`,
            teacher: 'Ninh Trần',
            index: index,
            originArray: originArray,
        }
    });
    console.log(newCourse);
    return newCourse;
}

//mapInArray(courses);
function reduceInArray(arr){
    var i = 0;
    function coinHandler(accumulator, currentValue, currentIndex, originArray){
        i++;
        var total = accumulator + currentValue.coin;
        console.table({
            'Lượt chạy: ': i,
            'Biến tích trữ: ': accumulator,
            'Giá khóa học: ': currentValue.coin,
            'Tích trữ được: ': total,
            //currentValue
        })
        return total;
    }
    var totalCoin = arr.reduce(coinHandler,0);
    console.log(totalCoin);
    return totalCoin
}
//reduceInArray(courses);

//! Flat - làm phẳng mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2 ,[3, 4] , 5 , [6, [7, 8, 9]]];
var flatArray = depthArray.reduce(function(flastOuput,depthItem) {
    return flastOuput.concat(depthItem);
    
},[])

function flattenArray(arr){
    return arr.reduce((acc, current) => {
        return acc.concat(Array.isArray(current) ? flattenArray(current) : current); // Sử dụng acc.concat(...) với kiểm tra Array.isArray
    }, []);
}
var flattenedArray = flattenArray(depthArray);
// console.log(flatArray);
// console.log(flattenedArray);

var topics = [
    {
        topic: 'Front-end development',
        courses:[
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end development',
        courses:[
            {
                id: 1,
                title: 'php'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]

var newCourses = topics.reduce(function (courses, topic){
    return courses.concat(topic.courses);
},[])
//console.log(newCourses)
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(arr){
    var filterDirector = arr.filter(function(movie, index){
        //console.log(index);
        console.log(movie['Director']);
      return movie["Director"] === "Christopher Nolan";
    })
    console.log(filterDirector);

    var totalRating  = filterDirector.reduce(function(a,b){
   
        return a + parseFloat(b.imdbRating);

    },0)

    var result = totalRating/(filterDirector.length);
    return result;
  }
  
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675