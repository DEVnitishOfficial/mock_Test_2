function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Reset error messages
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";

    // Perform validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;

    var isValid = true;

    if (!name) {
      errorContainer.innerHTML += "<p class='error'>Please enter your name.</p>";
      isValid = false;
    }

    if (!email) {
      errorContainer.innerHTML += "<p class='error'>Please enter your email.</p>";
      isValid = false;
    }

    if (!phone) {
      errorContainer.innerHTML += "<p class='error'>Please enter your phone number.</p>";
      isValid = false;
    }

    if (!password) {
      errorContainer.innerHTML += "<p class='error'>Please enter your password.</p>";
      isValid = false;
    }

    if (!age) {
      errorContainer.innerHTML += "<p class='error'>Please enter your age.</p>";
      isValid = false;
    }

    if (!gender) {
      errorContainer.innerHTML += "<p class='error'>Please select your gender.</p>";
      isValid = false;
    }

    if (!date) {
      errorContainer.innerHTML += "<p class='error'>Please enter a valid date.</p>";
      isValid = false;
    }

    if (!color) {
      errorContainer.innerHTML += "<p class='error'>Please select a color.</p>";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  }