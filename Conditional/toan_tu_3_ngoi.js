// let name = "Linh";
let name = "Thư";
let gender = false;
let married = true;
// "Hello, Mr. Linh"
// if(gender == true){
//     console.log(`Hello, Mr. ${name}`)
// }
// else{
//     if(married == true){
//         console.log(`Hello, Mrs. ${name}`)
//     }
//     else{
//         console.log(`Hello, Ms. ${name}`)
//     }
// }

// gender == true ? console.log(`Hello, Mr. ${name}`) : console.log(`Hello, Ms. ${name}`)

console.log(`Hello, ${gender == true ? 'Mr' : married == true ? "Mrs" :'Ms'}.${name}`)