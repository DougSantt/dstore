const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const fields = [
        {
            id: 'name',
            label: 'name',
            validator: nameIsValid
        },
        {
            id: 'last-name',
            label: 'last-name',
            validator: nameIsValid
        }
    ]

    const errorIcon = '<i class="bi bi-exclamation-circle-fill"></i>'

    fields.forEach(function (field) {
        const input = document.getElementById(field.id)
        const inputBox = input.closest('.input-box')
        const inputValue = input.value
      
        const errorSpan = inputBox.querySelector('.type-here')
        errorSpan.innerHTML = ''

        inputBox.classList.remove('invalid')
        inputBox.classList.add('valid')

        const fieldValidator = field.validator(inputValue)

        if(!fieldValidator.isValid){
            errorSpan.innerHTML= `${errorIcon} ${fieldValidator.errorMessage}`
            inputBox.classList.add('invalid')
            inputBox.classList.remove('valid')
            return
        }

    })

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
    //verificar a existência da funçao validator
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