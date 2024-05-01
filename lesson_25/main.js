function User(firstName,lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
User.prototype.address = 'Thái Bình'
var author = new User('Ninh','Trần','Under');

author.age = 26;
console.log(author);
console.log(author.address);

var use = new User('opama', 'uet', 'under');
console.log(use);

console.log(User === use.constructor);