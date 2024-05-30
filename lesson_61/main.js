class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;

    }
    getName() {
        return this.name;
    }
    getAge() {
        if (this.age > 18) {
            return this.age;
        } else {
            return "bạn chưa đủ 18 tuổi"
        }
    }
}
var student1 = new Student("Ninh Trần", 17, "dinhmanhninhtt@gmail.com");
console.log(student1.getAge());