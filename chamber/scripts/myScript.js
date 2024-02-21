// Script for the website

// Get the elements from the document
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const lastModified = document.querySelector("#last-modified");

// Add a click event listener to the hamburger button
hamburger.addEventListener("click", function() {
  // Toggle the show-menu class on the menu element
  menu.classList.toggle("show-menu");
});

// Get the last modified date of the document
const date = new Date(document.lastModified);

// Format the date as dd/mm/yyyy
const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

// Set the text content of the last modified element
lastModified.textContent = formattedDate;

const apiKey = "74fa0eb0cbeba754d2e09f7a61a0969d";

// Get the chamber location coordinates
const lat = "5.6037"; // Latitude of Accra
const lon = "-0.1870"; // Longitude of Accra

// Build the API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// Fetch the data from the API
fetch(apiUrl)
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Display the current temperature and weather description
    const currentTemp = data.list[0].main.temp; // Get the current temperature
    const currentDesc = data.list[0].weather[0].description; // Get the current weather description
    document.getElementById("current-weather").innerHTML = `The current temperature is ${currentTemp}°C and the weather is ${currentDesc}.`;

    // Display the three-day temperature forecast
    const forecast = document.getElementById("forecast"); // Get the forecast element
    forecast.innerHTML = ""; // Clear the forecast element
    for (let i = 1; i <= 3; i++) { // Loop through the next three days
      const dayTemp = data.list[i * 8].main.temp; // Get the temperature for the day
      const dayDate = data.list[i * 8].dt_txt.slice(0, 10); // Get the date for the day
      const dayElement = document.createElement("p"); // Create a paragraph element
      dayElement.innerHTML = `The temperature on ${dayDate} will be ${dayTemp}°C.`; // Set the content of the paragraph element
      forecast.appendChild(dayElement); // Append the paragraph element to the forecast element
    }
  })
  .catch(error => console.error(error)); // Handle any errors

   // Add this JavaScript code snippet to your existing script // Function to close the banner 
   function closeBanner() { 
    document.getElementById('chamber-event-banner').style.display = 'none'; }
     // Function to check if today is Monday, Tuesday, or Wednesday 
     function isChamberEventDay() { 
      const today = new Date().getDay(); 
      // Get the day of the week (0-6, where 0 is Sunday) 
      return today >= 1 && today <= 3; 
      // Return true if today is Monday, Tuesday, or Wednesday 
    } 
    // Show the banner if today is a chamber event day 
    if (isChamberEventDay()) { 
      document.getElementById('chamber-event-banner').style.display = 'block'; 
    }