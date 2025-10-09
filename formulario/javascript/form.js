const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const fields = [
        {
            id: 'name',
            label: 'Nome',
            validator: nameIsValid
        },
        {
            id: 'last-name',
            label: 'Sobrenome',
            validator: nameIsValid
        },
        {
            id:'birthdate',
            label:'Nascimento',
            validator: dateIsValid
        },
        {
            id:'email',
            label: 'E-mail',
            validator: emailIsValid
        },
        {
            id:'password',
            label:'Senha',
            validator: passwordIsSecure
        },
         {
            id:'confirm-password',
            label:'Confirmar senha',
            validator: passwordMatch
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

    const genders = document.getElementsByName('gender')
    const radioContainer = document.querySelector('.radio-container')
    const genderErrorSpan = radioContainer.querySelector('.type-here')

    const selectedGender = [...genders].find(input => input.checked)
     radioContainer.classList.add('invalid')
     radioContainer.classList.remove('valid')
     genderErrorSpan.innerHTML=`${errorIcon} Selecione um gênero!`

    if(selectedGender){
        radioContainer.classList.add('valid')
        radioContainer.classList.remove('invalid')
        genderErrorSpan.innerHTML=''
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
    }

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

    const regex = /^[a-zA-Z]+$/
    if(!regex.test(value)) {
        validator.isValid = false
        validator.errorMessage = `Apenas letras!`
    }
    return validator;
    // adicionar algo que irá verificar se o cliente digitou certo ao clicar fora do input
}

function dateIsValid(value){
    const validator = {
        isValid: true,
        errorMessage: null
    }

     if (isEmpty(value)) {
        validator.isValid = false;
        validator.errorMessage = 'Obrigatório!';
        return validator;
    }

    const year = new Date(value).getFullYear();

    if(year < 1920 || year > new Date().getFullYear()) {
        validator.isValid = false;
        validator.errorMessage = 'Data inválida!';
        return validator;
    }

    return validator;
}

function emailIsValid(value){

      const validator = {
        isValid: true,
        errorMessage: null
    }

     if (isEmpty(value)) {
        validator.isValid = false;
        validator.errorMessage = 'Email Obrigatório!';
        return validator;
    }

     const regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

     if(!regex.test(value)){
         validator.isValid = false;
         validator.errorMessage = 'Email inválido!';
         return validator;
     }
    
     return validator;
}

function passwordIsSecure(value){

       const validator = {
        isValid: true,
        errorMessage: null
    }

     if (isEmpty(value)) {
        validator.isValid = false;
        validator.errorMessage = 'Senha Obrigatória!';
        return validator;
    }

    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    
    if(!regex.test(value)){
        validator.isValid = false;
        validator.errorMessage = `
        Sua senha deve conter ao menos: <br/>
        8 dígitos <br / 
        1 letra minúscula <br/>
        1 letra maiúscula <br/>
        1 número </br>
        1 caracter especial:#@$&*
        `;
        return validator
    }

    return validator;

}

function passwordMatch(value){

       const validator = {
        isValid: true,
        errorMessage: null
    }

    const passwordValue = document.getElementById('password').value

    if(value === '' || passwordValue !== value){
        validator.isValid = false
        validator.errorMessage = 'Senhas não são iguais!'
        return validator
    }
    return validator
}

const passwordIcons = document.querySelectorAll('.password-icon')
passwordIcons.forEach(icon =>{
    icon.addEventListener('click',function(){
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type === 'password' ? 'text' : 'password'
        this.classList.toggle('bi-eye')
    })
})