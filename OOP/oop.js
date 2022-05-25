let duong = {
    // attributies/fields
    fullname: "Dương",
    age : 20,
    gender: true,
    hobbies: [
        "Cầu lông",
        "Đá banh",
        "Chạy bộ"
    ],
    // methods
    greeting : function(){
        console.log(`hi, I'm ${this.fullname}, I'm ${this.age} years old`)        
    }
}

duong.greeting();
console.log(`hi, I'm ${duong.fullname}, I'm ${duong.age} years old`)
// duong.fullname
// duong['fullname']

let duong_fn = "Dương"
let duong_age = 20
let duong_gender = true
let duong_hobbies = [
    "Cầu lông",
    "Đá banh",
    "Chạy bộ"
]

let array = new Array();

array.includes(5)