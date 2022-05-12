let c = -40;
// if(c < 0){
//     console.log("Bằng")
// }else if(c < 10 && c >= 0){
//         console.log("Tuyết")
//     }else if(c < 15 && c >= 10){
//             console.log("Rét")
//         }else if(c < 25 && c >= 15){
//                 console.log("Mát")
//             }else if(c < 30 && c >= 25){
//                     console.log("Nóng")
//                 }else{
//                     console.log("TT Nguy hiểm")
//                 }

if(c < 25){
    if(c < 15){
        if( c >= 10){
            console.log("Ret")
        }
        else{
            if(c >= 0){
                console.log("Tuyết")
            }
            else{
                console.log("Băng")
            }
        }
    }
    else{
        console.log("Mát")
    }
}
else{
    if(c <= 30){
        console.log("Nóng")
    }
    else{
        console.log("Nguy hiểm")
    }
}