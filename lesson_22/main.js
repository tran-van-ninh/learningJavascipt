/**
 * Todo Array
    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra dât type?
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
 */
var languages = ["javascript",
        "php",
        "java",
        "python"
    ];

var languagesArray = new Array(
    "javascript",
    "php",
    "java",
    "python"
);
console.log(languages);
console.log(typeof languages);
console.log(Array.isArray(languages));

// truy xuất mảng
console.log(languages[2]);
//độ dài mảng
console.log(languages.length);