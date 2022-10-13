// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log("Sum from 1 to 10 is " + sum);
// sum = 0;
// for (var i = 20; i <= 37; i++) {
//   sum += i;
// }
// console.log("Sum from 20 to 37 is " + sum);
// sum = 0;
// for (var i = 35; i <= 49; i++) {
//   sum += i;
// }
// console.log("Sum from 35 to 49 is " + sum);

function sum(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  console.log(`Sum from ${start} to ${end} is ${sum}`);
}
// sum(1, 10)
// sum(20, 37)
// sum(35, 49)
let start = 1;
let end = 10;
sum(start, end)
start = 20;
end = 37;
sum(start, end)
start = 35;
end = 49;
sum(start, end)