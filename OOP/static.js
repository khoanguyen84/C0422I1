class Student {
    constructor(fullname, age, gender){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
    greeting(){
        return `${this.fullname}, ${this.age}, ${this.gender}`
    }
    static getSchoolName(){
        return 'CodeGym Huế'
    }
}

let duong = new Student("Duong", 18, true);
// console.log(duong.getSchoolName())
console.log(Student.getSchoolName())

Math.random()
Math.floor()

// Array.reduce(function(){

// })

// Array.join()

let array = new Array()
array.join()