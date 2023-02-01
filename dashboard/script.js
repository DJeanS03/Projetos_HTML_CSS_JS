const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      let getMode = localStorage.getItem("mode")
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            }      

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");

});
      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if (body.classList.contains("dark")){
            modeText.innerHTML = "Light Mode";
        }else{
          modeText.innerHTML = "Dark Mode";
        }
        
        if (!body.classList.contains("dark")){
          localStorage.setItem("mode" , "light-mode");
      }else{
          localStorage.setItem("mode" , "dark-mode");
      }

});