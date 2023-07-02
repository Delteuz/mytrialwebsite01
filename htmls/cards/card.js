//For Navbar section

function toggleMenu() {
  var menu = document.getElementById("menu");
  var icon = document.querySelector(".menu-toggle i");

  menu.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}
// End of hamburger menu
