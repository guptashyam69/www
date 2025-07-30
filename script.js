// ---------------------------
// LOGIN VALIDATION
// ---------------------------
function validateLogin(event) {
  event.preventDefault();

  const users = {
    "sybaf_sfc": "csfc@baf",
    "tybaf_sfc": "csfc@baf",
    "fybaf_sfc": "csfc@baf",
    "fybscit_sfc": "csfc@it",
    "sybscit_sfc": "csfc@it",
    "tybscit_sfc": "csfc@it",
    "fybms_sfc": "csfc@bms",
    "sybms_sfc": "csfc@bms",
    "tybms_sfc": "csfc@bms"
  };

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const errorMsg = document.getElementById("error-msg");

  if (users[username] === password) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    if (errorMsg) {
      errorMsg.textContent = "Invalid username or password.";
      errorMsg.style.display = "block";
    }
  }
}

// LOGOUT FUNCTION
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// REDIRECT IF NOT LOGGED IN
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html")) {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      window.location.href = "login.html";
    }
  }
});

// ---------------------------
// FORM BOOKING SUBMISSION
// ---------------------------
function handleForm(event) {
  event.preventDefault(); // Prevent actual form submission

  // Show the popup
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  // Set current date & time
  const now = new Date();
  const datetimeString = now.toLocaleString(); // Format: "27/07/2025, 7:23:55 PM"
  document.getElementById("datetime").textContent = `Date & Time: ${datetimeString}`;

  // Optionally: reset form
  document.getElementById("bookingForm").reset();

  return false; // Prevent real form submit
}

// CLOSE POPUP FUNCTION
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
