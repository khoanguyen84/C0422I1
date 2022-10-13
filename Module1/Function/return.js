function sum(number1, number2) {
  let total = number1 + number2;
  // console.log(`${number1} + ${number2} = ${total}`)
  // document.write(`${number1} + ${number2} = ${total}`)
  // document.querySelector("h1").innerHTML = `${number1} + ${number2} = ${total}`;
  return `${number1} + ${number2} = ${total}`;
}
document.querySelector("h1").innerHTML = sum(5, 7);
console.log(sum(8, 9));
document.write(sum(10, 10));
// xây dựng 1 hàm generateArray tạo ra 1 mảng
// mảng này có kích cỡ là 10 phần tử
// giá trị của mảng được sinh ngẫu nhiên [20, 30]
// hiển thị giá trị của mảng ra console.
// tính tổng các giá trị có trong mảng trên
// đếm xem trong mảng trên có bao nhiêu số chẵn
