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
// Counter Animation

const counters=document.querySelectorAll(".stat-card h2");

const speed=80;

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,'');

const count=+counter.innerText.replace(/\D/g,'');

const inc=Math.ceil(target/speed);

if(count<target){

counter.innerText=(count+inc)+"+";

setTimeout(update,20);

}

};

update();

});
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}
// ================================
// SCROLL REVEAL
// ================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll("section,.service-card,.project-card,.testimonial-card,.why-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
/*==================================
 SCROLL ANIMATION
==================================*/

.hidden{

opacity:0;

transform:translateY(50px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.nav-links.active{

display:flex;

position:absolute;

top:85px;

left:0;

width:100%;

background:#fff;

flex-direction:column;

padding:25px;

box-shadow:0 15px 40px rgba(0,0,0,.08);

}
