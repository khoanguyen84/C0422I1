let numbers = [0, 3, 4, 5, 6, 6, 8, 6, 8, 9, 3];
// let result = numbers.reduce(function (prevValue, currNumber) {
//   return prevValue + currNumber;
// });
// console.log(result);

// let result = numbers.filter(function(number){
//     return number > 5 && number < 9
// })
// console.log(result)

// let greaterThanZero = numbers.every(function(number){
//     return number > 0;
// })

// console.log(greaterThanZero)
let existGreaterThanTen = numbers.some(function(number){
    return number > 10;
})

// console.log(existGreaterThanTen)

// console.log(numbers.indexOf(3))
// console.log(numbers.lastIndexOf(3))
console.log(numbers.find(function(number){
    return number > 3
}))
console.log(numbers.findIndex(function(number){
    return number > 3
}))

let sologen = "12423534534534"
console.log(Array.from(sologen))

console.log(numbers.includes(60))