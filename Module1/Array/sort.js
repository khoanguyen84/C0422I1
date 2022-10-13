// 11. sort()
// sort theo alphabel
// sort theo number, sử dụng 1 hàm comparer

// let names = ["Khoa", "khoi", "khoan", "Son"]
// console.log(names.sort())
let numbers = [1, 2, 0, 11, 3, 20, 4];
numbers.sort(function(n1, n2){
    return n1 - n2;
})
console.log("Min value: ", numbers[0])
console.log("Max value: ", numbers[numbers.length - 1])
// console.log(numbers)
// console.log(numbers.reverse())
// // numbers.sort()
// console.log(numbers);
// 1 2 11 3 20 4
// 1 11 2 20 3 4: đ
// 3 1 20 2 4 11

// ASCII