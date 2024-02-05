// Populate the year and last modified date using JavaScript code
window.addEventListener('load', function() {
    // Get the current year
    let year = new Date().getFullYear();
    // Get the element with id="year"
    let yearElement = document.getElementById('year');
    // Set the text content of the element to the year
    yearElement.textContent = year;

    // Get the last modified date of the document
    let lastModified = document.lastModified;
    // Get the element with id="lastModified"
    let lastModifiedElement = document.getElementById('lastModified');
    // Set the text content of the element to the last modified date
    lastModifiedElement.textContent = 'Last modified: ' + lastModified;
});
// Get the button element with id="hamburger"
let hamburger = document.getElementById('hamburger');
// Get the nav element
let nav = document.querySelector('nav');
// Add a click event listener to the button element
hamburger.addEventListener('click', function() {
    // Toggle the nav element from viewable to not viewable
    nav.classList.toggle('show');
    // Toggle the hamburger icon to an 'X' icon
    hamburger.classList.toggle('close');
});


// Get the current date in milliseconds
let currentDate = Date.now();

// Get the stored date from localStorage
let storedDate = localStorage.getItem("lastVisitDate");

// Declare a variable for the message
let message;

// Check if this is the first visit or not
if (storedDate === null) {
  // If this is the first visit, display a welcome message
  message = "Welcome! Let us know if you have any questions.";
} else {
  // If this is not the first visit, calculate the difference in days
  let difference = currentDate - storedDate;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Check if the difference is less than a day
  if (days < 1) {
    // If yes, display a message for returning visitors
    message = "Back so soon! Awesome!";
  } else {
    // If no, display a message with the number of days
    message = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

// Store the current date in localStorage
localStorage.setItem("lastVisitDate", currentDate);

// Display the message in the sidebar content area
let sidebarContent = document.querySelector(".sidebar-content");
sidebarContent.textContent = message;

// Include the LazyLoad library script
let script = document.createElement("script");
script.src = "lazyload.min.js";
document.body.appendChild(script);

// Initialize the LazyLoad instance
let lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

// Add a hover effect to the images in the gallery
let images = document.querySelectorAll(".gallery img");

// Loop through the images
for (let image of images) {
  // Add a mouseover event listener
  image.addEventListener("mouseover", function() {
    // Apply a CSS filter effect
    this.style.filter = "grayscale(50%) brightness(150%)";
  });

  // Add a mouseout event listener
  image.addEventListener("mouseout", function() {
    // Remove the CSS filter effect
    this.style.filter = "none";
  });
}
