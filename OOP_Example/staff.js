class staff{
    constructor(id, fullname, email, salary, avatar){
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.salary = salary;
        this.avatar = avatar
    }
    getInfo(){
        return `${this.id}, ${this.fullname}, ${this.email}, ${this.salary}`
    }
}

class Helper{
    static formatCurrency(number){
        return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})
    }
}

let staffs = [
    new staff(1, "Thành", "thanh@gmail.com", 10000000, "https://i.pravatar.cc/150?img=1"),
    new staff(2, "Trung", "trung@gmail.com", 10500000, "https://i.pravatar.cc/150?img=2"),
    new staff(3, "Linh", "linh@gmail.com", 9000000, "https://i.pravatar.cc/150?img=3"),
    new staff(4, "Quý", "quý@gmail.com", 11000000, "https://i.pravatar.cc/150?img=4"),
    new staff(5, "Pháp", "phap@gmail.com", 20000000, "https://i.pravatar.cc/150?img=5"),
    new staff(6, "Dương", "duong@gmail.com", 21000000, "https://i.pravatar.cc/150?img=7"),
]

function renderStaff(){
    let htmls = staffs.map(function(staff){
        return `
            <div class="staff-info">
                <img src="${staff.avatar}" alt="">
                <h3>${staff.fullname}</h3>
                <h4>Staff ID: ${staff.id}</h4>
                <h4>Email: ${staff.email}</h4>
                <h4>Salary: ${Helper.formatCurrency(staff.salary)}</h4>
            </div>
        `
    })
    document.querySelector("#staffs").innerHTML = htmls.join("");
}



renderStaff();