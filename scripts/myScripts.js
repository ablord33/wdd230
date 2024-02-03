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
