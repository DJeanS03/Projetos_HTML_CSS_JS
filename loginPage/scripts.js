const showHide = document.querySelector('.pass-icns')
      show = document.querySelector('.bx-show');
      hide = document.querySelector('.bx-hide');
      password = document.querySelector('.password');

const email = document.querySelector('.email');
    email_icon = document.querySelector('.bx-envelope');
    let patternE = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const pass_icon = document.querySelector('.bx-lock-alt');

const lgn_btn = document.querySelector('.lgn-btn') 
      
showHide.addEventListener('click' , () =>{
    if(password.type === 'password'){
        password.type = 'text';
        hide.style.display = 'block';
        show.style.display = 'none';
    }else{
        password.type = 'password';
        hide.style.display = 'none';
        show.style.display = 'block';
}}) 


email.addEventListener('keyup' , () =>{
    if(email.value.match(patternE)){ //obrigatoriedade para email
      email.setAttribute('style', 'border-color: rgb(66, 111, 246)')
      email_icon.setAttribute('style', 'color: rgb(66, 111, 246)') 
      document.querySelector('.msg-error-email').innerHTML = ('')
      validEmail = true
    }else{
      email.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      email_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-email').innerHTML = ('Digite um email válido')
      validEmail = false
    }
  })

  lgn_btn.addEventListener('click' , () => {
     if (email.value == ""){
      email.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      email_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-email').innerHTML = ('Digite um email para continuar')
    }if (password.value == ""){
      password.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      pass_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-pass').innerHTML = ('Digite uma senha para continuar')
    }else{
        password.setAttribute('style', 'border-color: rgb(66, 111, 246)')
        pass_icon.setAttribute('style', 'color: rgb(66, 111, 246)') 
        document.querySelector('.msg-error-pass').innerHTML = ('')
    }
})