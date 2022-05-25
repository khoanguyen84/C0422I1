function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function getCirclePrimeter(radius) {
  return 2 * Math.PI * radius;
}

// console.log("Area: ", getCircleArea(10));
// console.log("Primeter:", getCirclePrimeter(10));

// console.log("Area: ", getCircleArea(15));
// console.log("Primeter:", getCirclePrimeter(15));

// let circle_1 = {
//   radius: 10,
//   getCircleArea: function () {
//     return Math.PI * this.radius ** 2;
//   },
//   getCirclePrimeter: function () {
//     return 2 * Math.PI * this.radius;
//   },
// };
// console.log("Area: ", circle_1.getCircleArea());
// console.log("Primeter:", circle_1.getCirclePrimeter());
// let circle_2 = {
//   radius: 15,
//   getCircleArea: function () {
//     return Math.PI * this.radius ** 2;
//   },
//   getCirclePrimeter: function () {
//     return 2 * Math.PI * this.radius;
//   },
// };
// console.log("Area: ", circle_2.getCircleArea());
// console.log("Primeter:", circle_2.getCirclePrimeter());

// this ~ context (ngữ cảnh)
function Circle(radius) {
  this.radius = radius;
  this.getCircleArea = function () {
    console.log('this is:', this)
    return Math.PI * this.radius ** 2;
  };
  this.getCirclePrimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

let circle_1 = new Circle(10);
console.log("Area: ", circle_1.getCircleArea());
// console.log("Primeter:", circle_1.getCirclePrimeter());
// let circle_2 = new Circle(15);
// console.log("Area: ", circle_2.getCircleArea());
// console.log("Primeter:", circle_2.getCirclePrimeter());