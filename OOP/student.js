function Student(fullname, age, gender){
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.greeting = function(){
        return `Chào mọi người, mình là ${this.fullname}, mình ${this.age} tuổi và giới tính là ${this.gender}`;
    }
}

// let vu = new Student("Vũ", 18, "Nam")
// console.log(vu.greeting())
// let thu = new Student("Thư", 19, "Nữ")
// console.log(thu.greeting())
// let tien = new Student("Tiên", 20, "Nam")
// console.log(tien.greeting())

let array_1 = new Array(1,2,4,5)
let array_2 = new Array(11,12,14,15)
console.log(array_1.includes(1))
console.log(array_2.includes(1))