"use strict";

// Hamburger menu
var hamburgerMenuBtn = document.getElementById("toggle-menu");
var sidebar = document.getElementById("sidebar-hidden");

hamburgerMenuBtn.addEventListener("click", function() {
  sidebar.classList.toggle("show");
});