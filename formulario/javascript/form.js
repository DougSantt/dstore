const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.querySelector('#name').value
    console.log(name)
})

const passwordIcons = document.querySelectorAll(".password-icon")
passwordIcons.forEach(icon =>{
    icon.addEventListener('click',function(){
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type === 'password' ? 'text' : 'password'
        this.classList.toggle('bi-eye')
    })
})