const clicked = document.querySelector("#container");
const list = document.querySelector("i");

clicked.addEventListener("dblclick", () =>{
    list.style.transform="translate(-50% ,-50% ) scale(1)";
    list.style.opacity ="0.8";
  setTimeout(function(){
    list.style.transform="translate(-50% ,-50% ) scale(0)"

  }, 2000)
  setTimeout(function(){
    
    list.style.opacity ="0"
  }, 1000)
    
})