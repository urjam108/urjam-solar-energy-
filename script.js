function calculateSolar(){

let bill=document.getElementById("bill").value;

let system=document.getElementById("system").value;

let saving=bill*0.90;

let cost=system*65000;

document.getElementById("saving").innerHTML=
"Estimated Monthly Saving : ₹"+saving;

document.getElementById("cost").innerHTML=
"Estimated System Cost : ₹"+cost;

}

// ===== MOBILE MENU =====

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
