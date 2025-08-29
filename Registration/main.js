document.getElementById("registrationForm").addEventListener("submit", function(e) {
      e.preventDefault();
      let isValid = true;
      
      // Clear previous errors
      document.querySelectorAll(".error").forEach(el => el.style.display = "none");
      
      // Full Name
      const fullName = document.getElementById("fullName");
      if (fullName.value.trim() === "") {
        showError(fullName, "Full name is required");
        isValid = false;
      }
      
      // Email
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  }

  // Phone
  const phone = document.getElementById("phone");
  if (!phone.value.match(/^[0-9]{11}$/)) {
    showError(phone, "Phone must be 11 digits");
    isValid = false;
  }
  
  // Password
  const password = document.getElementById("password");
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword");
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }
  
  // Course
  const course = document.getElementById("course");
  if (course.value === "") {
    showError(course, "Please select a course");
    isValid = false;
  }

  // Gender
  const gender = document.querySelector("input[name='gender']:checked");
  if (!gender) {
    showError(document.querySelector("input[name='gender']"), "Please select gender");
    isValid = false;
  }
  
  // DOB
  const dob = document.getElementById("dob");
  if (dob.value === "") {
    showError(dob, "Date of birth is required");
    isValid = false;
  }

  // Address
  const address = document.getElementById("address");
  if (address.value.trim() === "") {
    showError(address, "Address is required");
    isValid = false;
  }
  
  if (isValid) {
    alert("Registration Successful!");
    this.reset();
  }
});

function showError(input, message) {
  const errorElement = input.closest(".form-group").querySelector(".error");
  errorElement.innerText = message;
  errorElement.style.display = "block";
}
