// 1. Declaration function
function sum(n1, n2) {
  return n1 + n2;
}
// 2. Expression function
let substract = function (n1, n2) {
  return n1 - n2;
};
// 3. Anonymous function/ Callback function
let numbers = [1, 3, 4, 5];
numbers.map(function (number) {
  return number * 2;
});
// 4. define class
function Student(fullname, age, gender) {
  this.fullname = fullname;
  this.age = age;
  this.gender = gender;
  // 5. define method
  this.greeting = function () {
    return `${this.fullname}, ${this.age}, ${this.gender}`
  };
}

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

class GraduateStudent{
    constructor(fullname, age, gender, certificate){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.certificate = certificate;
    }
    greeting(){
        return `${this.fullname}, ${this.age}, ${this.gender}`
    }
}
