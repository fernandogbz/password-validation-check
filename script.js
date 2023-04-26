// Getting variables
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding regular expressions and index of the requirement list item
const requirements = [
  {regex: /.{8,}/, index:0 }, // Minimum of 8 characters
  {regex: /[0-9]/, index:1 }, // At least one number
  {regex: /[a-z]/, index:2 }, // At least one  lowercase letter
  {regex: /[A-Z]/, index:3 }, // At least one  uppercase letter
  {regex: /[^A-Za-z0-9]/, index:4 }, // At least one special character 
]

passwordInput.addEventListener("keyup", (e)=>{
  //Looping through each object item of the array
  requirements.forEach(item => {
    //Check if the password matches the requirement regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    // Getting a particular element of object index number
    // Updating icon of requirement item if requirement matched or not
    if(isValid) {
      // firstElementChild returns the first child of li, which is the icon element
      requirementItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      
    }
  });
});


eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});