// Get the form element
var form = document.getElementById("myForm");

// Get the input elements
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");
var email = document.getElementById("email");
var rating = document.getElementById("rating");
var value = document.getElementById("value");
var submit = document.getElementById("submit");

// Add an input event listener to the rating input
rating.addEventListener("input", function() {
  // Update the value span with the current rating value
  value.textContent = rating.value;
});

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if the password and confirm inputs match
  if (password.value !== confirm.value) {
    // If not, show an error message and clear the inputs
    alert("The passwords do not match. Please try again.");
    password.value = "";
    confirm.value = "";
    // Focus the user back to the password input
    password.focus();
  } else {
    // If they match, submit the form
    form.submit();
  }
});