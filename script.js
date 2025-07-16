// script.js
// When the button is clicked, add/remove the 'dark' class on <body>
function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
  // Wait until the DOM is loaded, then hook up the button
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");
    btn.addEventListener("click", toggleDarkMode);
  });
  