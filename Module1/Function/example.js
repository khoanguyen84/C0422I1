// 1. chức năng sinh ra 1 mảng: 
// input: size, min, max
// output: mảng
function genrateArray(size, min, max){
    let array = new Array(size);
    for(let i=0 ; i < size; i++){
        array[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    return array;
}
// 2. Tính tổng các giá trị có trong mảng
// input: mảng
// output: tổng các giá trị trong mảng
function totalValuesInArray(array){
    let total = 0;
    for(let i=0 ; i < array.length; i++){
        total += array[i];
    }
    return total;
}
// 3. Đếm các số chẵn có trong mảng
// input: mảng
// output: số lượng các số chẵn có trong mảng
function countEvenValuesInArray(array){
    let count = 0;
    for(let i=0 ; i < array.length; i++){
        if(array[i] % 2 == 0){
            count ++;
        }
    }
    return count;
}

// 4. Hiển thị giá trị của mảng
// input: mảng
// output: hiển thị giá trị trong mảng

function printArray(array){
    console.log(array.toString())
}

function main(){
    let numbers = genrateArray(10, 23, 45);
    printArray(numbers);
    console.log(`Total of values in array: ${totalValuesInArray(numbers)}`)
    console.log(`Count of even values in array: ${countEvenValuesInArray(numbers)}`)
}
function main_2(){
    let numbers = genrateArray(15, 43, 75);
    console.log(`Total of values in array: ${totalValuesInArray(numbers)}`)
}

main();
main_2();

// Viết chương trình tạo ra 1 ma trận vuông, có kích cỡ là n (n x n)
// Hiển trị ma trận
// Tính tổng giá trị trên đường chéo chính
// Tính tổng giá trị trên đường chéo phụ
// Tính tổng giá trị trên đường biên
// Đến số lượng số nguyên tố có trong ma trận