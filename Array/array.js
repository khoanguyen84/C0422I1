// 1. Giống nhau: cùng để định, khai báo biến mảng
// 2. Khác nhau:
// [] ra đời trước, new ra đời sau
// tạo ra 1 biến mảng tên là numbers, có 1 phần tử và giá trị của phần tử này là 5
// let numbers = [5];
// console.log("numbers", numbers.length)
// tạo ra 1 biến mảng tên là names, có 5 phần tử và giá trị của phần tử này là empty
// let names = new Array(5);
// console.log("names", names.length)

// let n1 = 2;
// let n2 = 4;
// let n3 = 5;
// let n4 = 6;
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)

const numbers = [2, 4, 5, 6];
numbers = [5, 6, 7, 8, 98, 9];
// numbers[4] = 20;
// numbers[2] = 20;
// console.log(numbers)

// console.log(numbers.length)
// let numbers = new Array(5)
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])

// numbers[3] = 60

// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// console.log(numbers)
// let names = new Array(2,4,5,6);
// console.log(names[1])

// numbers.length = 10;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for..in
for(let index in numbers){
    console.log(numbers[index])
}
// for..of
// for(let number of numbers){
//     console.log(number)
// }
