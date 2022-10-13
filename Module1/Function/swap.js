function swap(number1, number2) {
  let number = number1;
  number1 = number2;
  number2 = number;
  console.log(`number1 = ${number1}, number2 = ${number2}`) // 7 - 5
}

let number1 = 5;
let number2 = 7;
console.log(`number1 = ${number1}, number2 = ${number2}`) // 5 - 7
swap(number1, number2); 
console.log(`number1 = ${number1}, number2 = ${number2}`) // 5 - 7 (7 - 5)