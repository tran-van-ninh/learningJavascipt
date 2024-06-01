var a = 3;
var b = 6;
var c = a + b;
(a + b) > 8 ? console.log(c) : console.log('chúc bạn may mắn lần sau')

const obj = {
        myFunction: function(message) {
            //console.log(message)
            return message
        }
    }
console.log(obj.myFunction?.("Chúc bạn may mắn lần sau") ? "Chúc bạn may mắn" : "Hẹn gặp lại")
console.log(obj.myFunction?.(123) ? 'Exist' : 'Not Exist');
