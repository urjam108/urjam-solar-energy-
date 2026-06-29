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
