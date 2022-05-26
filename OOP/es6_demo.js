class Student {
    constructor(fullname, age, gender){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
    greeting(){
        return `${this.fullname}, ${this.age}, ${this.gender}`
    }
}
class GraduateStudent extends Student{
    constructor(fullname, age, gender, certificate){
        super(fullname, age, gender);
        this.certificate = certificate;
    }
    greeting(){
        return `${super.greeting()}, ${this.certificate}`
    }
    // hello(){
    //     return `${this.fullname}, ${this.age}, ${this.gender}, ${this.certificate}`
    // }
}
// class GraduateStudent{
//     constructor(fullname, age, gender, certificate){
//         this.fullname = fullname;
//         this.age = age;
//         this.gender = gender;
//         this.certificate = certificate;
//     }
//     greeting(){
//         return `${this.fullname}, ${this.age}, ${this.gender}, ${this.certificate}`
//     }
// }


// let khoa  = new Student("Khoa", 18, true)
let trung = new GraduateStudent("Trung", 19, true, "Certification")
// console.log(khoa.greeting())
console.log(trung.greeting())
// console.log(trung.hello())
// console.log(Student.greeting())


// class Transport{
//     constructor(wheel){
//         this.wheel = wheel
//     }
//     move(){
//         return `Move by using ${this.wheel}`
//     }
// }

// class Car extends Transport{
//     move(){
//         return `using fuel, ${super.move()}`;
//     }
// }

// class Bicycle extends Transport{
//     move(){
//         return 'chạy bằng com'
//     }
// }