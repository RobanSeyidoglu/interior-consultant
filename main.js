// Start Header
let ul = document.querySelector(".container nav ul");
let menu = document.querySelector(".container nav i");
let p = document.querySelector(".container p");
if (getComputedStyle(menu).display !== "none") {
  menu.onclick = function () {
    if (getComputedStyle(ul).display === "none") {
      ul.style.display = "flex";
      p.style.display = "none";
      menu.classList.toggle("fa-bars");
      menu.classList.toggle("fa-xmark");
    } else if (getComputedStyle(ul).display === "flex") {
      ul.style.display = "none";
      p.style.display = "flex";
      menu.classList.toggle("fa-xmark");
      menu.classList.toggle("fa-bars");
    }
  };
  console.log(menu);
}
// End Header
