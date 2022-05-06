function controlLight(status){
    if(status == "on"){
        document.getElementById('light').src='https://www.w3schools.com/js/pic_bulbon.gif'
    }
    else{
        document.getElementById('light').src='https://www.w3schools.com/js/pic_bulboff.gif'
    }
}