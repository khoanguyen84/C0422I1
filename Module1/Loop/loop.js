// Cho người dùng nhập vào 1 số nguyên
// Nếu số nguyên là số chẵn thì cộng dòn vào 1 biến tổng
// nếu số nguyên là só lẻ thì kết thúc chương trình và hiển thị tổng

// let number = Number(prompt("Enter number: "));
// let total = 0;
// while(number % 2 == 0){
//     total += number;
//     number = Number(prompt("Enter number: "));
// }

// document.write(`Total even numbers: ${total}`)

// let total = 0;
// let number = 0;
// do{
//     number = Number(prompt("Enter number: "));
//     if(number % 2 == 0){
//         total += number;
//     }
// }
// while(number % 2 == 0)
// document.write(`Total even numbers: ${total}`)

let total = 0;
let number = 0;
// for (let i = 0; i >= 0; i++) {
// for (; ;) {
//     number = Number(prompt("Enter number: "));
//     if (number % 2 == 0) {
//         total += number;
//     }
//     else {
//         break;
//     }
// }
// document.write(`Total even numbers: ${total}`)
number = Number(prompt("Enter number: "));
for (; number % 2 == 0;) {
    total += number;
    number = Number(prompt("Enter number: "));
}
document.write(`Total even numbers: ${total}`)