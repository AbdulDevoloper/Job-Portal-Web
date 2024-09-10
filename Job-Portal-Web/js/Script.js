document.addEventListener("DOMContentLoaded", function () {
    // Get the form and input fields
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="text"][placeholder="Enter your email..."]');
    const passwordInput = document.querySelector('input[type="text"][placeholder="Enter your password..."]');
  
    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting automatically
  
      // Get the values from inputs
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Simple validation to check if inputs are not empty
      if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
      }
  
      if (password === "") {
        alert("Please enter your password.");
        passwordInput.focus();
        return;
      }
  
      // Mock login process (you would normally send the data to a server)
      alert("Login successful!");
  
      // Clear the inputs after login
      emailInput.value = "";
      passwordInput.value = "";
    });
  });
  