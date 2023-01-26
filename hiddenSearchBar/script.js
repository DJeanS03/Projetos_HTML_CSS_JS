const body = document.querySelector("body"),
           modeSwitch = body.querySelector('.modesun'),
           searchIcn = body.querySelector('.search-Icn'),
           search = body.querySelector('.search-inp')

           modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");
});

            searchIcn.addEventListener("click", () =>{
             search.classList.toggle("hidden");
});