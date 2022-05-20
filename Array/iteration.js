let products = ["iPhone 6s", "Nokia 3300", "Oppo", "Samsung"];
// products = [
//     "<h1>iPhone 6s</h1>",
//     "<h1>Nokia 3300</h1>",
//     "<h1>Oppo</h1>",
//     "<h1>Samsung</h1>"
// ]

// for(let i = 0; i< products.length;i ++){
//     products[i] = `<h1>${products[i]}</h1>`
// }

// console.log(products)

// for(let index in products){
//     console.log(`${index} - ${products[index]}`)
// }

// 1. forEach()
// products.forEach(function(product, index){
//     console.log(`${index} - ${product}`)
// })

// 2. map()
// let htmls = products.map(function(product){
//     return `<button style="background-color:green; color:white;">${product}</butt>`
// })
// console.log(htmls)
// document.body.innerHTML = htmls.join("")

let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(function(number){
    return number**2;
})
console.log(result)

let jobs = [
    "Lau nhà",
    "Nấu cơm",
    "Rữa chén",
    "Quét nhà",
    "Đón con"
]

let htmls = jobs.map(function(job, index){
    return `
        <tr>
            <td>${index + 1}</td>
            <td id='td_${index}'>${job}</td>
            <td>
                <button onclick="remove(${index})">Remove</button>
                <button onclick="cancel(${index})">Cancel</button>
            </td>
        </tr>
    `
})

document.querySelector("table>tbody").innerHTML = htmls.join("");

function addJob(){
    let jobName = document.querySelector("#jobName").value;
    jobs.push(jobName);

    let htmls = jobs.map(function(job, index){
        return `
            <tr>
                <td>${index + 1}</td>
                <td id='td_${index}'>${job}</td>
                <td>
                    <button onclick="remove(${index})">Remove</button>
                    <button onclick="cancel(${index})">Cancel</button>
                </td>
            </tr>
        `
    })
    
    document.querySelector("table>tbody").innerHTML = htmls.join("");
}

function remove(index){
    jobs.splice(index, 1);

    let htmls = jobs.map(function(job, index){
        return `
            <tr>
                <td>${index + 1}</td>
                <td id='td_${index}'>${job}</td>
                <td>
                    <button onclick="remove(${index})">Remove</button>
                    <button onclick="cancel(${index})">Cancel</button>
                </td>
            </tr>
        `
    })
    
    document.querySelector("table>tbody").innerHTML = htmls.join("");
}

function cancel(index){
    document.querySelector(`#td_${index}`).classList.add('cancel')
}