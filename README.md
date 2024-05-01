# learningJavascipt
    tự học javascript

# Lesson_2 hàm built-in functions 
    <!--todo là hàm được javascript xây dựng sẵn-->
    Giới thiệu môt số hàm built-in functions thường dùng
    Alert
    Console
    Confirm
    Prompt
    Set timeout
<!-- Set timeout chạy đoạn code 1 lần sau một đoạn thời gian -->
    Set interval
<!-- Set interval chạy lặp lại đoạn code sau một thời gian -->

# Lesson_3 Toán tử trong JavaScript
    1. Toán tử số học - arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical

# Lesson_4 Toán tử số học Arithmetic
    +       --> Cộng
    -       --> Trừ
    *       --> Nhân
    **      --> Lũy thừa
    /       --> Chia
    %       --> Chia lấy số dư
    ++       --> Tăng 1 giá trị số
    --       --> Giảm 1 giá trị số

# Lesson_5 Toán tử gán - Assignment
    Toán tử        Ví dụ              Tương đương
    =              x = y              x = y
    +=             x += y             x = x + y
    -=             x -= y             x = x - y
    *=             x *= y             x = x * y
    /=             x /= y             x = x / y
    **=            x **= y            x = x ** y

# Lesson_6 Toán tử ++ --
    Prefix tiền tố
    Postfix hậu tố

# Lesson_7 Toán tử chuỗi string operator

# Lesson_8 Toán tử so sánh
    Toán tử
    ==            -->      Bằng
    !=            -->      Khác
    >             -->      Lớn hơn
    <             -->      Nhỏ hơn
    >=            -->      Lớn hơn hoặc bằng
    <=            -->      Nhỏ hơn hoặc bằng

# Lesson_9 Kiểu dữ liệu boolean trả về true and false
    toán tử so sánh

# Lesson_10 Câu lệnh điều kiện if else
    <!--! Trong javascript có sáu giá trị sau khi convert sang boolean là false -->
    0
    false
    " ", ''
    undefined
    NaN
    null

# Lesson_11 Toán tử logical
    1. && - And
    2. || - Or
    3. !  - Not

# Lesson_12 Kiểu dữ liệu Nguyên thủy(Primitive Data) and phức hợp (Complex Data)
    1. Dữ liệu nguyên thủy
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
    2. dữ liệu phức hợp
        - Function
        - Object
    
# Lesson_13 Toán tử so sánh II
    Toán tử
    <!--todo so sánh tuyệt đối cả giá trị và data type -->
        === 
        !==
    <!--todo so sánh tương đối giá trị -->
        !=
        ==

# Lesson_14 Toán tử logical và câu lệnh điều kiện If

    <!--todo toán tử && trả về kết quả một trong 2 vế đọc từ trái qua phải nếu gặp False dừng chương trình và trả về False nếu không trả về kết quả cuối cùng -->
    var result = "A" && "B" && "C" && "D" && "E"
    ==> E

    <!--! Toán tử || đọc từ trái qua phải đến hết chương trình or gặp được kết quả True nó sẽ gắn vào kết quả và kết thúc chương trình -->
    var result = "A" || "B" || "C" || "D" || "E"
    ==> A

# Lesson_15 Khái niệm hàm trong javascript
    1. Hàm?
        - Một khối mã
        - Làm 1 việc cụ thể
    2. Loại hàm
        - Built-in
        - Tự định nghĩa
    3. Tính chất
        - Không thực thi khi định nghĩa
        - sẽ thược thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả vể một giá trị
    4. Tạo hàm đầu tiên

# Lesson_16 Hàm chứa tham số
    1. Tham số
        - Tham số là một giá trị mà mình có thể truyền vào khi gọi một function(param)
        - có tính private
        - có thể truyền nhiều tham số
    2. Đối tượng aguments

# Lesson_17 Return trong hàm
    - Hàm function không return trả về undefined

# Lesson_18 Các loại hàm
    <!--todo Các lọai function -->
        1. Declarations function
        2. Exceptions function
        3. Arrows function

# Lesson_19 Chuỗi trong Javascript
    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào? Lý do?
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem dộ dài chuỗi
    4. Chú ý độ dài khi viết Code
    5. Template string ES6

# Lesson_20 Làm việc với chuỗi
    1. length
    2. Find index 
        -indexOf Tìm một ký tự hoặc một đoạn mã trong chuỗi trả về số thứ tự thằng đầu tiên nó tìm dược, nếu không có indexOf trả về -1
    3. Cut string
        - dủng slice cắt một đoạn chuỗi
    4. Replace
        - thay thế một đoạn chuỗi
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
        - xóa khoảng trắng ở hai đầu
    8. Split
        - cắt một chuỗi thành 1 araay bởi 1 điểm chung
    9. Get a character by index

# Lesson_21 Number and working with numbers
    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng các nào? Tại sao?
        - Kiểm tra data type
    
    2. Làm việc với Number
        - To string
        - To Fixed
            + Làm tròn số thập phân

# Lesson_22 Mảng array
    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra dât type?
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
# Lesson_23 Working with array
    <!--todo Các kiểu phương thức của array -->
        toString() : chuyển mảng thành chuỗi
        join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
        pop() : xóa phần tử cuối mảng và trả về phần tử đó
        push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
        shift() : xóa phần tử đầu mảng và trả về phần tử đó
        unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
        splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
        slice() : lấy ra một phần mảng mới từ mảng cũ
        concat() : nối mảng mới vào mảng cũ
        reverse() : đảo ngược mảng
        sort() : sắp xếp mảng