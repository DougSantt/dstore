const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const errorIcon = '<i class="bi bi-exclamation-circle-fill"></i>'

    const name = document.querySelector('#name')
    const inputBox = name.closest('.input-box')

    const nameValue = name.value
    const errorSpan = inputBox.querySelector('.type-here')
    errorSpan.innerHTML = ''

    inputBox.classList.remove('invalid')
    inputBox.classList.add('valid')


    if(isEmpty(nameValue)){
        errorSpan.innerHTML= `${errorIcon} Campo Obrigatório!`
        inputBox.classList.add('invalid')
        inputBox.classList.remove('valid')
        return
    }
})

function isEmpty(value){
    return value === '';
}

const passwordIcons = document.querySelectorAll('.password-icon') //mudei aqui
passwordIcons.forEach(icon =>{
    icon.addEventListener('click',function(){
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type === 'password' ? 'text' : 'password'
        this.classList.toggle('bi-eye')
    })
})