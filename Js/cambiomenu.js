let menu=document.getElementById("menu")

window.addEventListener("scroll",function(){

    if (this.document.documentElement.scrollTop<=200 ) {


        menu.classList.add("menu")
        menu.classList.remove("menu2")
    }
    else {
              
        menu.classList.add("menu2")
        menu.classList.remove("menu")   
    }
})

/*window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("menu").style.height = "75px";
      document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      document.getElementById("menu").style.color = "#000";
      document.getElementById("menu").style.line - height;
      "37.5px";
    } else {
      document.getElementById("menu").style.height = "100px";
      document.getElementById("menu").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      document.getElementById("menu").style.color = "#fff";
      document.getElementById("menu").style.line - height;
      "50px";
    }
  }*/