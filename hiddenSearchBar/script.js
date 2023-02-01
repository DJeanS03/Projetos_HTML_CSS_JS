const body = document.querySelector("body"),
      modeToggle = document.querySelector('.dark-light'),
      search = document.querySelector('.serch-icns'),
      input = document.querySelector('.search'),
      sidebarOpen = body.querySelector('.sidebarOpen'),
      sidebarClose = body.querySelector('.sidebarClose'),
      menu = body.querySelector('.menu');

           
let getMode = localStorage.getItem("mode"); // impede que a pag volte pro tema dark ao reiniciar
      if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
      }
            modeToggle.addEventListener("click", () =>{
            body.classList.toggle("dark");

            // impede que a pag volte pro tema dark ao reiniciar
            if (!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode");
            }else{
                localStorage.setItem("mode" , "dark-mode");
            }

});
            //codigo da barra de pesquisa
            search.addEventListener("click", () =>{
            input.classList.toggle("hidden");                     
});
        //codigo do sidebar
        sidebarOpen.addEventListener("click", () =>{
            menu.classList.add('active')
});
        body.addEventListener('click' , e =>{
            let clickedElm = e.target;
            if(!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')){
                menu.classList.remove('active')
            }
});