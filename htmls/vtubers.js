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

//  for FILTER
var elements = document.getElementsByClassName("thumbCard");
var elementBtn = document.getElementsByClassName("all");
function filter(className) {
  for (var i = 0; i < elements.length; i++) {
    if (elementBtn[i].classList.contains(className)) {
      elements[i].style.display = "block";
      elementBtn[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
      elementBtn[i].style.display = "none";
    }
  }
}

function showAll() {
  for (var i = 0; i < elements.length; i++) {
    elementBtn[i].style.display = "block";
    elements[i].style.display = "block";
  }
}
