let count = 1;

const indicator = document.querySelector('#indicator')

const maxheight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const percentage = (window.scrollY / maxheight) * 100;

    indicator.style.width = `${percentage}%`;
})

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

const slider = document.querySelectorAll('.sliders');
const btnPrev = document.getElementById('down');
const btnNext = document.getElementById('up');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function NextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
    currentSlide = 0
    } else {
    currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
    currentSlide = slider.length -1
    } else {
    currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', NextSlider)
btnPrev.addEventListener('click', prevSlider)