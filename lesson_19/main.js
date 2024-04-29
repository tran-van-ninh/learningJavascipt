/**
    *Todo Tạo chuỗi
        1. Tạo chuỗi
            - Các cách tạo chuỗi
            - Nên dùng cách nào? Lý do?
            - Kiểm tra data type
        2. Một số case sử dụng backslash (\)
        3. Xem dộ dài chuỗi
        4. Chú ý độ dài khi viết Code
        5. Template string ES6
 */

var fullname = 'Ninh trần là một \'pro\'';
var fullname1 = new String('Ninh Trần');

console.log(fullname);
console.log(fullname.length);

var firstName = 'Ninh';
var lastName = 'Trần'
console.log('Tôi là ' + firstName + ' ' + lastName);
console.log(`Tôi là ${firstName} ${lastName}`); //! Template string