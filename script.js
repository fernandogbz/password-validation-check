// Getting variables
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});