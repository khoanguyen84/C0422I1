// 1. toString(): convert 1 mảng thành 1 chuỗi và các phần tử trong mảng được phân cách với nhau bằng dấu phẩy
// let numbers = [1, 2, 3, 4, 5, 6];
// let str = "";
// for(let number of numbers){
//     str += `${number},`;
// }
// str = str.substring(0, str.length - 1);

// console.log(str)
// console.log(numbers.toString())
// => 1,2,3,4,5,6
// 2. join(): convert 1 mảng thành 1 chuỗi. Nếu ko truyền separator thì dùng dấu phẩy, có truyển dùng theo separator
// console.log(numbers.join("; "))
// console.log(numbers)
// 3. push(): thêm 1 hoặc nhiều giá trị vào cuối mảng và trả về độ dài mới của mảng
// let result = numbers.push(7, 8, 9, 0);
// console.log(numbers);
// console.log(result);
// 4. pop(): xóa 1 phần tử ở cuối mảng và trả về giá trị vừa được xóa
// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.pop()
// console.log(result)
// console.log(numbers)
// 5. unshift(): thêm 1 hoặc nhiều phần tử và đầu mảng và trả về độ dài mới
// let result = numbers.unshift(10,11,12)
// console.log(numbers)
// console.log(result)
// 6. shift(): xóa 1 phần tử ở đầu mảng và trả về giá trị vừa xóa
// let result = numbers.shift();
// console.log(result)
// console.log(numbers)
// 7. splice(): thêm 1 hoặc nhiều phần tử ở giữa mảng
// xóa 1 hoặc nhiều phần tử ở giữa mảng
let numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(3, 0, 10, 10, 10);
// console.log(numbers)
// numbers.splice(3, 3)
// console.log(numbers)
// numbers.splice(1, 3)
// numbers.splice(1, 0, 20, 30, 40)
// numbers.splice(1, 3, 20, 30, 40)
// console.log(numbers)
// 8. delete(): xóa giá trị tại vị trí được xác định
// delete numbers[0];
// console.log(numbers);
// 9. concat(): nối 1 hoặc nhiều mảng/giá trị lại với nhau và trả về 1 mảng mới

// let newN = numbers.concat(7);
// console.log(numbers)
// console.log(newN)
// let job1 = ["Lau nhà", "Rữa chén"]
// let job2 = ["Nấu cơm", "Giặt đồ"]
// let jobs =job1.concat(job2, "Đón con");
// console.log(job1)
// console.log(job2)
// console.log(jobs)

// 10. slice(): lấy 1 mảng con từ 1 mảng gốc
let subNumbers = numbers.slice(1, 4)
console.log(subNumbers)