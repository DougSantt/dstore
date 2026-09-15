const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menu-mobile')
const btnFechar = document.querySelector('.btn-fechar')
const listMobile = document.querySelectorAll('.list-mobile')
const buttonConfira = document.getElementsByClassName(".button-confira")
const aboutArticle = document.querySelector(".about-article")
const main = document.querySelector("main")
const headerInput = document.querySelector('.headerInput')
const inputBox = document.querySelector(".inputBox")
const aboutSection = document.querySelector('.about-section')

const menu_on = ()=>{
    return menuMobile.classList.toggle("clickClose")
}

btnMenu.addEventListener("click",()=>{
    menu_on()
})

btnFechar.addEventListener("click",(ev)=>{
    menu_on()
})

menuMobile.addEventListener("click",(evt)=>{
    if(evt.target.tagName === "A" || evt.target.tagName=== "LI") {
        menuMobile.style.display=""
        menu_on()
    }
})

document.addEventListener("click",(e)=>{
    const clickFora = !menuMobile.contains(e.target) && !btnMenu.contains(e.target)
    
    if(clickFora) {
      menuMobile.classList.remove("clickClose")
    
    }
})

function adjustSearchInput() {
  let windowSize = window.innerWidth;
  switch (true) {
    case (windowSize >= 584):
       aboutArticle.style.marginTop = ''
       headerInput.style.width= ''
       inputBox.style.width= ''
      break
      
    case (windowSize <= 397):
      headerInput.style.width= "68vw"
      inputBox.style.width= "68vw"
      break
    case (windowSize >=398):
        headerInput.style.width= ''
        inputBox.style.width= ''
      break
  }
}

const resizeCallBacks = [adjustSearchInput];


function runResizeCallBacks(){
  resizeCallBacks.forEach(it => it());
}

let img_slider = document.querySelectorAll('.slider-container .slider-box')
let btn_prox =document.querySelector('#proxima')
let btn_anter =document.querySelector('#anterior')
let btn_nav = document.querySelectorAll('.btn-nav-box .btn-nav')

let contadorImg = img_slider.length
let imgAtiva = 0

let slide_interval;

function iniciarIntervalo() {
    slide_interval = setInterval(() => {
        imgAtiva++;

        if (imgAtiva >= contadorImg) {
            imgAtiva = 0;
        }

        mostrarSlider();

    }, 5000);
}

function reiniciarIntervalo() {
    clearInterval(slide_interval);
    iniciarIntervalo();
}

btn_prox.addEventListener('click',()=>{
    imgAtiva++;
    if(imgAtiva >= contadorImg){
      imgAtiva = 0;
    }
    mostrarSlider()
    reiniciarIntervalo()
})

btn_anter.addEventListener('click',()=>{
    imgAtiva--;
    if(imgAtiva < 0){
      imgAtiva = contadorImg -1
    }
    mostrarSlider()
    reiniciarIntervalo()
})

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo')
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo')

    antigaImg.classList.remove('ativo')
    antigoBtnNav.classList.remove('ativo')

    img_slider[imgAtiva].classList.add('ativo')

    btn_nav[imgAtiva].classList.add('ativo')

}

btn_nav.forEach((btn,indice)=>{
    btn.addEventListener('click',()=>{
      imgAtiva = indice
      mostrarSlider()
      reiniciarIntervalo()
    })
})

const elementos_revelar = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.3
});

elementos_revelar.forEach(elemento => {
    observador.observe(elemento);
});

// contagem regressiva de uma data
let imprimir_dias = document.querySelector('#dias_txt')
let imprimir_horas = document.querySelector('#horas_txt')
let imprimir_min = document.querySelector('#min_txt')
let imprimir_sec = document.querySelector('#sec_txt')

const dataEvento = new Date("2026-10-15T00:00:00");

function contador() {
    const agora = new Date();

    const diferenca = dataEvento - agora;

    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    dias=dias<10?"0"+dias:dias;


    let horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    horas=horas<10?"0"+horas:horas;

    let minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    minutos=minutos<10?"0"+minutos:minutos;

     let segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );
    segundos=segundos<10?"0"+segundos:segundos;

    // console.log(`${dias} dias, ${horas} horas e ${minutos} minutos ${segundos}`) test
    imprimir_dias.innerHTML=dias+":"
    imprimir_horas.innerHTML=horas+":"
    imprimir_min.innerHTML=minutos+":"
    imprimir_sec.innerHTML=segundos

}
 
setInterval(contador, 1000);


iniciarIntervalo()
window.addEventListener('resize', runResizeCallBacks)
window.addEventListener('load', runResizeCallBacks)