// Contact Form Simple Notification Only

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // page reload rokta hai

  const status = document.getElementById("form-status");

  status.style.color = "#bb00ff";
  status.textContent = "✅ Message Sent Successfully!";

  // Form reset after 2 sec
  setTimeout(() => {
    document.getElementById("contact-form").reset();
    status.textContent = "";
  }, 2000);
});