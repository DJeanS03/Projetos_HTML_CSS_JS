function show() {
    var box = document.querySelector("#password")
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
