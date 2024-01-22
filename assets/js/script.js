let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function() {
    nextSlide()
}, 5000)

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }else {
        menuMobile.classList.add('open')
    }
}

function nextSlide(){
    count++;
    if(count>5){
        count = 1
    }

    document.getElementById("slide" + count).checked = true;
}