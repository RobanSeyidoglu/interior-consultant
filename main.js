// Start Header
let ul = document.querySelector(".container nav ul");
let menu = document.querySelector(".container nav i");
let p = document.querySelector(".container p");
let nav = document.querySelector(".container nav ");
let landingContainer = document.querySelector(".landing .container");
let arrow = document.querySelector(".landing .container .left .read i");

if (getComputedStyle(menu).display !== "none") {
  menu.onclick = function () {
    if (getComputedStyle(ul).display === "none") {
      nav.style.height = "90vh";
      ul.style.display = "flex";
      p.style.display = "none";
      menu.classList.toggle("fa-bars");
      menu.classList.toggle("fa-xmark");
    } else if (getComputedStyle(ul).display === "flex") {
      nav.style.height = "0vh";
      ul.style.display = "none";
      p.style.display = "flex";
      menu.classList.toggle("fa-xmark");
      menu.classList.toggle("fa-bars");
    }
  };
}

// End Header
