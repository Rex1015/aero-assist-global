function showService(service){

let contents=document.querySelectorAll(".service-content");
let buttons=document.querySelectorAll(".tab-btn");

contents.forEach(content=>{
content.classList.remove("active");
});

buttons.forEach(btn=>{
btn.classList.remove("active");
});

document.getElementById(service).classList.add("active");

event.target.classList.add("active");

}
