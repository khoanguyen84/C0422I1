class Slide{
    constructor(id, name, content, details){
        this.id = id;
        this.name = name;
        this.content = content;
        this.details = details
    }
}

class Detail{
    constructor(photo, description){
        this.photo = photo;
        this.description = description;
    }
}

let sildes = [
    new Slide(1, "Slide 1", "Content 1", [
        new Detail("https://i.pravatar.cc/150?img=3", "description 1.1"),
        new Detail("https://i.pravatar.cc/150?img=4", "description 1.2"),
        new Detail("https://i.pravatar.cc/150?img=5", "description 1.3"),
    ]),
    new Slide(2, "Slide 2", "Content 2", [
        new Detail("https://i.pravatar.cc/150?img=13", "description 2.1"),
        new Detail("https://i.pravatar.cc/150?img=14", "description 2.2"),
        new Detail("https://i.pravatar.cc/150?img=15", "description 2.3"),
    ]),
    new Slide(3, "Slide 3", "Content 3", [
        new Detail("https://i.pravatar.cc/150?img=23", "description 3.1"),
        new Detail("https://i.pravatar.cc/150?img=24", "description 3.2"),
        new Detail("https://i.pravatar.cc/150?img=25", "description 3.3"),
    ]),
]

function renderSlide(){
    let htmls = sildes.map(function(slide){
        // let detail_htmls = slide.details.map(function(detail){
        //     return `
        //         <tr>
        //             <td>
        //                 <img src="${detail.photo}" alt="">
        //             </td> 
        //             <td>
        //                 <p>${detail.description}</p>
        //             </td> 
        //         </tr>
        //     `
        // })
        // ${detail_htmls.join("")}
        return `
            <div class="slide-item">
                <h1>ID ${slide.id}</h1>
                <h1>${slide.name}</h1>
                <h3>${slide.content}</h3>
                <table id="detail_${slide.id}" class="d-none">
                    <tbody >
                        
                    </tbody>
                </table>
                <button onclick="page(${slide.id})">Page</button>
            </div>
        `
    })
    document.querySelector('.slide').innerHTML = htmls.join("");
}

function page(pageId){
    let slide = sildes.find(function(slide){
        return slide.id == pageId
    })
    let detail_htmls = slide.details.map(function(detail){
            return `
                <tr>
                    <td>
                        <img src="${detail.photo}" alt="">
                    </td> 
                    <td>
                        <p>${detail.description}</p>
                    </td> 
                </tr>
            `
        })
        document.querySelector(`#detail_${pageId}>tbody`).innerHTML = detail_htmls.join("");
    document.querySelector(`#detail_${pageId}`).classList.remove("d-none")
}
renderSlide();