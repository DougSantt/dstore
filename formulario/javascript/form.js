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


    if(!nameIsValid(nameValue).isValid){
        errorSpan.innerHTML= `${errorIcon} ${nameIsValid(nameValue).errorMessage}`
        inputBox.classList.add('invalid')
        inputBox.classList.remove('valid')
        return
    }
})

function isEmpty(value){
    return value === '';
}

function nameIsValid(value){
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = 'Campo Obrigatório!';
        return validator;
    }
    
    const min = 3;

    if(value.length < 3){
    validator.isValid = false; 
     validator.errorMessage = `Mínimo ${min} caracteres!`
        return validator;
    }

    const regex = /^[a-zA-Z]^/;
    if(!regex.test(value)) {
        validator.isValid = false
        validator.errorMessage = `Apenas letras!`
    }

    return validator;
}

const passwordIcons = document.querySelectorAll('.password-icon') //mudei aqui
passwordIcons.forEach(icon =>{
    icon.addEventListener('click',function(){
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type === 'password' ? 'text' : 'password'
        this.classList.toggle('bi-eye')
    })
})