// ================================
// URJAM SOLAR ENERGY V2
// GLOBAL PREMIUM JS
// ================================

// Navbar Shadow on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="none";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
