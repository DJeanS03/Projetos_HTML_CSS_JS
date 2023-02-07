const showHide = document.querySelector('.pass-icns')
      show = document.querySelector('.bx-show');
      hide = document.querySelector('.bx-hide');
      password = document.querySelector('.password');

      
const showHideC = document.querySelector('.pass-icnsC')
      showC = document.querySelector('.show-cfm');
      hideC = document.querySelector('.hide-cfm');
      passwordC = document.querySelector('.cfm-password');  

const user = document.querySelector('.name');
      user_icon = document.querySelector('.bx-user');
      validNome = false

const email = document.querySelector('.email');
      email_icon = document.querySelector('.bx-envelope');
      let patternE = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      validEmail = false

const pass_icon = document.querySelector('.bx-lock-alt');
let patternP = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    validPass = false

const pass_iconcfm = document.querySelector('.cfm');
      validCPass = false

const checkbox = document.querySelector('.termos_de_contrato')
const cfm_btn = document.querySelector('.rgt-btn') 

//====================Mostar a senha========================================================
showHide.addEventListener('click' , () =>{
  if(password.type === 'password'){
    password.type = 'text';
    hide.style.display = 'block';
    show.style.display = 'none';
  }else{
    password.type = 'password';
    hide.style.display = 'none';
    show.style.display = 'block';
  } 
});
 showHideC.addEventListener('click' , () =>{
   if(passwordC.type === 'password'){
     passwordC.type = 'text';
     hideC.style.display = 'block';
     showC.style.display = 'none';
   }else{
     passwordC.type = 'password';
     hideC.style.display = 'none';
     showC.style.display = 'block';
   } 
 });

/* passwordC.addEventListener('keyup' , () => {
  if(password.value != passwordC.value){
    passwordC.setCustomValidity("Senhas diferentes!");
    document.querySelector('.msg-error-cfmP').innerHTML = ('Digite um nome válido')
    passwordC.reportValidity();
    return false;
  }else{
    passwordC.setCustomValidity("");
    return true;
  }
}) */
//=========================Mensagens de erro caso não siga o padrão=====================================================================================


  user.addEventListener('keyup' , () =>{
    if(user != "" && user.value.length >=3){
      user.setAttribute('style', 'border-color: rgb(66, 111, 246)')
      user_icon.setAttribute('style', 'color: rgb(66, 111, 246)') 
      document.querySelector('.msg-error-name').innerHTML = ('')
      validNome = true
    }else{
      user.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      user_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-name').innerHTML = ('Digite um nome válido')
      validNome = false
    }
  })

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

  password.addEventListener('keyup' , () =>{
    if(password.value.match(patternP)){ //obrigatoriedade para senha
      password.setAttribute('style', 'border-color: rgb(66, 111, 246)')
      pass_icon.setAttribute('style', 'color: rgb(66, 111, 246)'); 
      document.querySelector('.msg-error-pass').innerHTML = ('')
      validPass = true
    }else{
      password.setAttribute('style', 'border-color: rgb(250, 0, 0)'); 
      pass_icon.setAttribute('style', 'color: rgb(250, 0, 0)'); 
      document.querySelector('.msg-error-pass').innerHTML = ('Sua senha deve ter de 8 caracteres a 16 caracteres, um número e uma letra maiúscula e uma minúscula.')
      validPass= false
    }
  })

  passwordC.addEventListener('keyup' , () => {
    if(password.value != passwordC.value){
      document.querySelector('.msg-error-cfmP').innerHTML = ('Senhas diferentes!')
      passwordC.setAttribute('style', 'border-color: rgb(250, 0, 0)'); 
      pass_iconcfm.setAttribute('style', 'color: rgb(250, 0, 0)');
      passwordC.reportValidity();
      validCPass = false
    }else{
      document.querySelector('.msg-error-cfmP').innerHTML = ('')
      passwordC.setAttribute('style', 'border-color: rgb(66, 111, 246)'); 
      pass_iconcfm.setAttribute('style', 'color: rgb(66, 111, 246)')
      validCPass = true
    }
  })

//=========================Confirma se todos os campos estão peenchidos e manda pro localStorage=================================================

  cfm_btn.addEventListener('click' , () => {
    if(user.value == ""){
      user.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      user_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-name').innerHTML = ('Digite um nome para continuar')
    } if (email.value == ""){
      email.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      email_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-email').innerHTML = ('Digite um email para continuar')
    }if (password.value == ""){
      password.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      pass_icon.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-pass').innerHTML = ('Digite uma senha para continuar')
    }if (passwordC.value == ""){
      passwordC.setAttribute('style', 'border-color: rgb(250, 0, 0)')
      pass_iconcfm.setAttribute('style', 'color: rgb(250, 0, 0)')
      document.querySelector('.msg-error-cfmP').innerHTML = ('Confirme sua senha para continuar')
    }if (!checkbox.checked){
      document.querySelector('.msg-error-checkbox').innerHTML = ('Marque para continuar')
    } if(validNome && validEmail && validPass && validCPass){
        let userList = JSON.parse(localStorage.getItem('userList') || '[]')
        userList.push({
          nameCad: user.value,
          emailCad: email.value,
          passCad: password.value
        })
        localStorage.setItem('userList', JSON.stringify(userList))
      document.querySelector('.text_success').innerHTML = ('Cadastrando usuário...')
      setTimeout(() =>{window.location.href = '../index.html'}, 3000)
      
    }
  })

/* const show = document.querySelector('.bx-show');
hide = document.querySelector('.bx-hide');
input = document.querySelector('.cfm-password');

show.addEventListener("click", ()=>{
  if(show.classList === "bx-show"){
      show.classList.replace("bx-show", "bx-hide")
  }else{
      show.classList.replace("bx-hide", "bx-show")
  }      
}) */