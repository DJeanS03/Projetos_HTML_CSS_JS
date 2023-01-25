function showP() {
    var boxx= document.querySelector("#password")
    var vieww = document.querySelector("#openP")
    var hidee = document.querySelector("#closeP")
    if (boxx.type === 'password'){
        boxx.type = "text";
        hidee.style.display = "block";
        vieww.style.display = "none";
    } else{
        boxx.type = "password";
        hidee.style.display = "none";
        vieww.style.display = "block";
    }
}     

function show() {
    var box = document.querySelector("#confirm-password")
    var view = document.querySelector("#open")
    var hide = document.querySelector("#close")
    if (box.type === 'password'){
        box.type = "text";
        hide.style.display = "block";
        view.style.display = "none";
    } else{
        box.type = "password";
        hide.style.display = "none";
        view.style.display = "block";
    }
}   

let senha = document.querySelector("#password")
let senhaConfirme = document.querySelector("#confirm-password")

function validarSenha() {
  if (senha.value != senhaConfirme.value) {
    senhaConfirme.setCustomValidity("Senhas diferentes!");
    senhaConfirme.reportValidity();
    return false;
  } else {
    senhaConfirme.setCustomValidity("");
    return true;
  }
}

senhaC.addEventListener('input', validarSenha);// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais