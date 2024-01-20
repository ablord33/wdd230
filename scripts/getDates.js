document.addEventListener("DOMContentLoaded", function () {
    // Get the current year and update the footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Get the last modified date and update the second paragraph
    document.getElementById ("lastModified").textContent = "Last modified: " + document.lastModified;
});