// ===============================
// Aero Assist Global Website JS
// ===============================


// NAVBAR SCROLL EFFECT
// makes navbar darker when scrolling
window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "rgba(0,0,0,0.9)";
}
else{
navbar.style.background = "rgba(0,0,0,0.7)";
}

});



// ===============================
// SMOOTH SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".card").forEach((el)=>{
observer.observe(el);
});




// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.innerText;

counter.innerText = "0";

const updateCounter = () => {

const current = +counter.innerText;

const increment = target / 150;

if(current < target){

counter.innerText = `${Math.ceil(current + increment)}`;

setTimeout(updateCounter, 10);

}
else{

counter.innerText = target;

}

};

updateCounter();

});




// ===============================
// BOOKING FORM HANDLER
// ===============================

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const confirmation = document.getElementById("confirmation");

confirmation.innerText = "✈️ Booking request received. Our operations team will contact you shortly.";

confirmation.style.color = "white";
confirmation.style.marginTop = "20px";

bookingForm.reset();

});

}



// ===============================
// CONTACT FORM HANDLER
// ===============================

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully. Our team will respond shortly.");

contactForm.reset();

});

}



// ===============================
// FLEET IMAGE HOVER EFFECT
// ===============================

const fleetImages = document.querySelectorAll(".slider img");

fleetImages.forEach(img => {

img.addEventListener("mouseover", () => {

img.style.transform = "scale(1.1)";
img.style.transition = "0.4s";

});

img.addEventListener("mouseout", () => {

img.style.transform = "scale(1)";

});

});




// ===============================
// SIMPLE IMAGE SLIDER AUTO SCROLL
// ===============================

const slider = document.querySelector(".slider");

if(slider){

let scrollAmount = 0;

setInterval(() => {

scrollAmount += 1;

slider.scrollLeft = scrollAmount;

if(scrollAmount >= slider.scrollWidth - slider.clientWidth){

scrollAmount = 0;

}

}, 30);

}
