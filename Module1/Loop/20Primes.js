let count = 0;
let countSNT = 0;
let number = 20
// for (let i = 2; countSNT < number; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count += 1;
//         }
//     }
//     if (count == 2) {
//         countSNT += 1;
//         console.log(i)
//     }
//     count = 0;
// }
// let i = 2;
// while (countSNT < number) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count += 1;
//         }
//     }
//     if (count == 2) {
//         countSNT += 1;
//         console.log(i)
//     }
//     count = 0;
//     i++;
// }
let i = 2;
do {
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count += 1;
        }
    }
    if (count == 2) {
        countSNT += 1;
        console.log(i)
    }
    count = 0;
    i++;
} while (countSNT < number)