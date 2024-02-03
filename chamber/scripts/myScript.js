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
