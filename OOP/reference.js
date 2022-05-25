// pass-by-reference (truyền tham chiếu)
let number_1 = [1, 2, 3, 4, 5];
let number_2 = number_1;
number_2[3] = 40;
// console.log(number_2)
// console.log(number_1)


let student_1 = {
    fullname: "Khoa",
    age: 18,
    gender: true
}

let student_2 = student_1;
student_2.fullname = "Thiên"
console.log(student_2)
console.log(student_1)