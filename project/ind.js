const bookingForm1 = document.getElementById("bookingForm1");
bookingForm1.addEventListener("submit", function(event) {
  event.preventDefault();
  const numTickets = document.getElementById("tickets").value;
  // Implement ticket booking logic here (e.g., send a form submission to the server)
  alert("You have booked " + numTickets + " tickets.");
});