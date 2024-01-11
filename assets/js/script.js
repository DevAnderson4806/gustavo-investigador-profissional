let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function() {
    nextSlide()
}, 5000)

function nextSlide(){
    count++;
    if(count>5){
        count = 1
    }

    document.getElementById("slide" + count).checked = true;
}