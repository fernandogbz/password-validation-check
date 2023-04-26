// Getting variables
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");


passwordInput.addEventListener("keyup", ()=>{
});


eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});