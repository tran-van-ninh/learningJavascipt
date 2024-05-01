var mySchool = 'school'
var myInfo = {
    name: 'ninh',
    age: 26,
    address: 'Thái bình',
    [mySchool]: 'uet'
}
var myKey = 'address'


myInfo.email = 'dinhmanhninhtt@gmail.com';
myInfo['my-email'] = 'dinhmanhninhnt@gmail.com';
delete myInfo.age;
console.log(myInfo[myKey]);
console.log(myInfo);