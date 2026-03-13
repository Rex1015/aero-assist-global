document.getElementById("bookingForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("confirmation").innerText =
"Thank you! Your booking request has been received.";

});
