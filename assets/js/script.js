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
}, 10000)

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

let slider3 = document.querySelector('.s-1')

function darup() {
    trocarindex()
    console.log('atribuição da função')
}

function trocarindex() {
    slider3.innerHTML = '<p class="slider">Nosso compromisso é trabalhar de forma legalizada, seguindo a Lei 13.432/17, artigo 154, com contratos e relatórios que garantem transparência e segurança para nossos clientes. Conte conosco para serviços confiáveis e dentro das normas estabelecidas. 💼✅ #Legalidade #Transparência<span>A VERDADE SOBRE A LEI DO DETETIVE<a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13432.htm" target="_blank">LEI Nº 13.432, DE 11 DE ABRIL DE 2017. </a>Que reconhece a profissão, o que podemos ou não, deveres, direitos, etc. </span></p>'
} 

function sliderdowm() {
    trocarindex2()
    console.log('atribuição2')
}

function trocarindex2() {
    slider3.innerHTML = '<div class="complemento-slider s-1"><p class="slider">... loading ... wait a moments ... shortly please wait ...</p></div>'
}