const sideMenu = document.querySelector(".side-menu");
const menuBtn = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");
const display = document.querySelector("main");
const bottomMenu = document.querySelector(".bottom-menu");

menuBtn.addEventListener('click',() => {
    sideMenu.classList.toggle('show-menu');
    display.classList.toggle('showmenu-edit');
    // menuBtn.style.zIndex = "0";
})

// closeBtn.addEventListener('click',() => {
//     sideMenu.classList.remove('show-menu');
//     display.classList.remove('showmenu-edit');
//     // menuBtn.style.zIndex = "2";
// })



let lastScrollY = window.scrollY;

window.addEventListener("scroll",()=>{
    if(lastScrollY < window.scrollY){
        bottomMenu.style.display = "none";
    }
    else{
        bottomMenu.style.display = "flex";
        
    }
    lastScrollY = window.scrollY;
})

// window.addEventListener('scroll',()=>{
//     if(scrollY < 100){
//          
//     }
//     else if(scrollY > 0){
//         
//     }
// })