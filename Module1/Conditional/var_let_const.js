// giống nhau: khai báo 1 biến
// var: javascript
// let, const (ES6 - ECMA Script 2015)

// var: có phạm vi global, sử dụng vùng nhớ
// let: có phạm vi local, không được sử dụng lại
// const: phải có giá trị khởi tạo và không được gán lại

// phạm vi biến (scope)
// 1. Global (toàn cục)
// 2. Local (cục bộ): block code, function,..

// var name = "Trung"
// // var name;
// console.log(name);
// {
//     {
//         let name = "Pháp"
//         console.log(name);
//     }
// }
// console.log(name);

// let name = "Trung"
// console.log(name);
// {
//     let name = "Pháp"
//     {
//         console.log(name);
//     }
// }
// console.log(name);



// let a = 5, b = 6, c = 7;
// let a = 5;
// let b = 6;
// let c = 7;

// var a1;
// var b1;
// var c2;

// var count = 0;
// count++;
// console.log(count)
// {
//     var count = 0;
//     count++;
//     console.log(count)
//     {
//         count++
//         {
//             count++
//             {
//                 count++;
//                 console.log(count)
//             }
//         }
//     }
// }
// console.log(count)


// compiler time
// runtime

const code = 10;
console.log(code)

const cgh = "CodeGym Huế"
cgh[0] = 'K'
console.log(cgh[0])
