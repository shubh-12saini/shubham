// ==================== World Clocks ====================

const clocks = {
  india: 'Asia/Kolkata',
  usa: 'America/New_York',
  uk: 'Europe/London',
  japan: 'Asia/Tokyo',
  australia: 'Australia/Sydney'
};

function updateClocks() {
  for (let id in clocks) {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: clocks[id]
    };
    document.getElementById(id).textContent = `${id.charAt(0).toUpperCase() + id.slice(1)}: ${now.toLocaleTimeString('en-US', options)}`;
  }
}

setInterval(updateClocks, 1000);
updateClocks();

// ==================== Contact Form Notification ====================

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const btn = form.querySelector("button[type='submit']");

// Optional: Initialize EmailJS if sending real emails
// emailjs.init("YOUR_USER_ID");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  btn.disabled = true;
  status.style.color = "#bb00ff";
  status.textContent = "✅ Message Sent Successfully!";

  // Reset form after 2 seconds
  setTimeout(() => {
    form.reset();
    status.textContent = "";
    btn.disabled = false;
  }, 2000);

  // =================== Optional EmailJS Integration ===================
  /*
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
    .then(() => {
      status.textContent = "✅ Message Sent Successfully!";
      form.reset();
      btn.disabled = false;
    }, (err) => {
      status.style.color = "red";
      status.textContent = "❌ Failed to send message.";
      btn.disabled = false;
      console.error(err);
    });
  */
});

// ==================== Calculator ====================

const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".calc-buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-value");
    if (val === "C") display.value = "";
    else if (val === "DEL") display.value = display.value.slice(0, -1);
    else if (val === "=") {
      try { display.value = eval(display.value); }
      catch { display.value = "Error"; }
    } else display.value += val;
  });
});
