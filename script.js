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

// ---------------------------
// LOGOUT FUNCTION
// ---------------------------
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ---------------------------
// PROTECT HOME PAGE
// ---------------------------
window.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "index.html") {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      window.location.href = "login.html";
    }
  }
});

// ---------------------------
// BOOKING FORM SUBMISSION
// ---------------------------
function handleForm(event) {
  event.preventDefault(); // Prevent real form submission

  // Show confirmation popup
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  // Set current date & time
  const now = new Date();
  const datetimeString = now.toLocaleString();
  document.getElementById("datetime").textContent = `Date & Time: ${datetimeString}`;

  // Reset the form
  document.getElementById("bookingForm").reset();

  return false;
}

// ---------------------------
// CLOSE POPUP FUNCTION
// ---------------------------
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
