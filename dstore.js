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

btnMenu.addEventListener("click",()=>{
    menuMobile.classList.toggle("clickClose")
})

btnFechar.addEventListener("click",()=>{
     menuMobile.style.display="none"
})

menuMobile.addEventListener("click",(evt)=>{
    if(evt.target.tagName === "A" || evt.target.tagName=== "LI") {
      menuMobile.classList.remove("clickClose")
    }
})

document.addEventListener("click",(e)=>{
    const clickFora = !menuMobile.contains(e.target) && !btnMenu.contains(e.target);
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
    case (windowSize <= 583):
        aboutArticle.style.marginTop='32em'
      
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

const adjustSection = ()=>{
   let windowSize = window.innerWidth
  if(windowSize <= 442) {
    aboutSection.style.height= "64em"
  } else {
    aboutSection.style.height= ''
  }
}

const resizeCallBacks = [adjustSection,adjustSearchInput];

function runResizeCallBacks(){
  resizeCallBacks.forEach(it => it());
}

window.addEventListener('resize', runResizeCallBacks)
window.addEventListener('load', runResizeCallBacks)

// interações slider
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

iniciarIntervalo()
