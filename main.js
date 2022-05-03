const sideMenu = document.querySelector(".side-menu");
const menuBtn = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");
const display = document.querySelector("main");
const bottomMenu = document.querySelector(".bottom-menu");

menuBtn.addEventListener('click',() => {
    sideMenu.classList.toggle('show-menu');
    display.classList.toggle('showmenu-edit');
})




let lastScrollY = window.scrollY;

window.addEventListener("scroll",()=>{
    if(lastScrollY < window.scrollY){
        bottomMenu.style.display = "none";
    }
    else if(lastScrollY > window.scrollY + 20){
        bottomMenu.style.display = "flex";
        
    }
    lastScrollY = window.scrollY;
})

// document.addEventListener('mouseup',function(e) {
//     if (sideMenu.classList.contains('show-menu')){
//         sideMenu.style.display = 'none';
//         display.classList.remove('showmenu-edit');
//     }
// })