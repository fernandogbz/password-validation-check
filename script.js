// Getting variables
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

// An array of password requirements with corresponding regular expressions and index of the requirement list item
const requirements = [
  {regex: /.{8,}/, index:0 },
  {regex: /.[0-9]/, index:1 },
  {regex: /.[a-z]/, index:2 },
  {regex: /.[A-Z]/, index:3 },
  {regex: /.[^A-Za-z0-9]/, index:4 },
]

passwordInput.addEventListener("keyup", ()=>{
});


eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});