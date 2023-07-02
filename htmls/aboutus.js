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

//not used
//  for FILTER section
// var sections = document.getElementsByClassName("section1");

// function filter(className) {
//   for (var i = 0; i < sections.length; i++) {
//     if (sections[i].classList.contains(className)) {
//       sections[i].style.display = "flex";
//     } else {
//       sections[i].style.display = "none";
//     }
//   }
// }

//Not used
// function validateForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   if (name == "" || email == "") {
//     alert("All fields must be filled out");
//     return false;
//   } else {
//     alert("Form submitted successfully!");
//     return true;
//   }
// }

// modal for games
//game1
const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");
const game4 = document.getElementById("game4");
const gameModal1 = document.getElementById("game1-modal");
const gameModal2 = document.getElementById("game2-modal");
const gameModal3 = document.getElementById("game3-modal");
const gameModal4 = document.getElementById("game4-modal");
const closeButton1 = document.getElementById("close-modal1");
const closeButton2 = document.getElementById("close-modal2");
const closeButton3 = document.getElementById("close-modal3");
const closeButton4 = document.getElementById("close-modal4");

game1.addEventListener("click", function () {
  gameModal1.style.display = "flex";
});
game2.addEventListener("click", function () {
  gameModal2.style.display = "flex";
});
game3.addEventListener("click", function () {
  gameModal3.style.display = "flex";
});
game4.addEventListener("click", function () {
  gameModal4.style.display = "flex";
});

closeButton1.addEventListener("click", function () {
  gameModal1.style.display = "none";
});

closeButton2.addEventListener("click", function () {
  gameModal2.style.display = "none";
});

closeButton3.addEventListener("click", function () {
  gameModal3.style.display = "none";
});

closeButton4.addEventListener("click", function () {
  gameModal4.style.display = "none";
});

// end of modal for games

//Carousel Images in Modal for games
const gameImages1 = [
  "url(cards/games/carousel/darksouls/4.jpg)",
  "url(cards/games/carousel/darksouls/1.jpg)",
  "url(cards/games/carousel/darksouls/2.jpg)",
  "url(cards/games/carousel/darksouls/3.jpg)",
  "url(cards/games/carousel/darksouls/5.jpg)",
  "url(cards/games/carousel/darksouls/6.png)",
  "url(cards/games/carousel/darksouls/7.jpg)",
  "url(cards/games/carousel/darksouls/8.jfif)",
  "url(cards/games/carousel/darksouls/9.jpg)",
  "url(cards/games/carousel/darksouls/10.jpg)",
  "url(cards/games/carousel/darksouls/11.jpg)",
  "url(cards/games/carousel/darksouls/12.jpg)",
  "url(cards/games/carousel/darksouls/13.jpg)",
];

const gameImages2 = [
  "url(cards/games/carousel/cod/2.jpg)",
  "url(cards/games/carousel/cod/1.jpg)",
  "url(cards/games/carousel/cod/3.jpg)",
  "url(cards/games/carousel/cod/4.jpg)",
  "url(cards/games/carousel/cod/5.jpg)",
];

const gameImages3 = [
  "url(cards/games/carousel/outlast/1.png)",
  "url(cards/games/carousel/outlast/2.jpg)",
  "url(cards/games/carousel/outlast/3.jpg)",
  "url(cards/games/carousel/outlast/4.jpg)",
  "url(cards/games/carousel/outlast/5.jpg)",
  "url(cards/games/carousel/outlast/6.jpg)",
  "url(cards/games/carousel/outlast/7.png)",
  "url(cards/games/carousel/outlast/8.png)",
  "url(cards/games/carousel/outlast/9.png)",
];

const gameImages4 = [
  "url(cards/games/carousel/nier/10.png)",
  "url(cards/games/carousel/nier/1.jpg)",
  "url(cards/games/carousel/nier/2.jpg)",
  "url(cards/games/carousel/nier/3.jfif)",
  "url(cards/games/carousel/nier/4.jpg)",
  "url(cards/games/carousel/nier/5.jpg)",
  "url(cards/games/carousel/nier/6.jpg)",
  "url(cards/games/carousel/nier/7.jpg)",
  "url(cards/games/carousel/nier/8.jpg)",
  "url(cards/games/carousel/nier/9.jpg)",
];

const leftBtn1 = document.querySelector("#leftBtn1");
const rightBtn1 = document.querySelector("#rightBtn1");

const leftBtn2 = document.querySelector("#leftBtn2");
const rightBtn2 = document.querySelector("#rightBtn2");

const leftBtn3 = document.querySelector("#leftBtn3");
const rightBtn3 = document.querySelector("#rightBtn3");

const leftBtn4 = document.querySelector("#leftBtn4");
const rightBtn4 = document.querySelector("#rightBtn4");

const image1 = document.querySelector("#gameImage1");
const image2 = document.querySelector("#gameImage2");
const image3 = document.querySelector("#gameImage3");
const image4 = document.querySelector("#gameImage4");

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;

leftBtn1.addEventListener("click", function () {
  //game 1
  currentIndex1--;
  if (currentIndex1 < 0) {
    currentIndex1 = gameImages1.length - 1;
  }
  image1.style.backgroundImage = gameImages1[currentIndex1];
});

leftBtn2.addEventListener("click", function () {
  //game2
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = gameImages2.length - 1;
  }
  image2.style.backgroundImage = gameImages2[currentIndex2];
});

leftBtn3.addEventListener("click", function () {
  //game3
  currentIndex3--;
  if (currentIndex3 < 0) {
    currentIndex3 = gameImages3.length - 1;
  }
  image3.style.backgroundImage = gameImages3[currentIndex3];
});

leftBtn4.addEventListener("click", function () {
  //game4
  currentIndex4--;
  if (currentIndex4 < 0) {
    currentIndex4 = gameImages4.length - 1;
  }
  image4.style.backgroundImage = gameImages4[currentIndex4];
});

rightBtn1.addEventListener("click", function () {
  //game1
  currentIndex1++;
  if (currentIndex1 >= gameImages1.length) {
    currentIndex1 = 0;
  }
  image1.style.backgroundImage = gameImages1[currentIndex1];
});

rightBtn2.addEventListener("click", function () {
  //game2
  currentIndex2++;
  if (currentIndex2 >= gameImages2.length) {
    currentIndex2 = 0;
  }
  image2.style.backgroundImage = gameImages2[currentIndex2];
});

rightBtn3.addEventListener("click", function () {
  //game3
  currentIndex3++;
  if (currentIndex3 >= gameImages3.length) {
    currentIndex3 = 0;
  }
  image3.style.backgroundImage = gameImages3[currentIndex3];
});

rightBtn4.addEventListener("click", function () {
  //game4
  currentIndex4++;
  if (currentIndex4 >= gameImages4.length) {
    currentIndex4 = 0;
  }
  image4.style.backgroundImage = gameImages4[currentIndex4];
});

//Gallery page tayo mehn
//--------------------------------------------
//---------------------------------------------
//------------------------------------------------------------
// modal for gallery
//gallery1
const gallery1 = document.getElementById("gallery1");
const gallery2 = document.getElementById("gallery2");
const gallery3 = document.getElementById("gallery3");
const gallery4 = document.getElementById("gallery4");
const galleryModal1 = document.getElementById("gallery1-modal");
const galleryModal2 = document.getElementById("gallery2-modal");
const galleryModal3 = document.getElementById("gallery3-modal");
const galleryModal4 = document.getElementById("gallery4-modal");
const closeButton1gallery = document.getElementById("close-modal1gallery");
const closeButton2gallery = document.getElementById("close-modal2gallery");
const closeButton3gallery = document.getElementById("close-modal3gallery");
const closeButton4gallery = document.getElementById("close-modal4gallery");

gallery1.addEventListener("click", function () {
  galleryModal1.style.display = "flex";
});
gallery2.addEventListener("click", function () {
  galleryModal2.style.display = "flex";
});
gallery3.addEventListener("click", function () {
  galleryModal3.style.display = "flex";
});
gallery4.addEventListener("click", function () {
  galleryModal4.style.display = "flex";
});

closeButton1gallery.addEventListener("click", function () {
  galleryModal1.style.display = "none";
});

closeButton2gallery.addEventListener("click", function () {
  galleryModal2.style.display = "none";
});

closeButton3gallery.addEventListener("click", function () {
  galleryModal3.style.display = "none";
});

closeButton4gallery.addEventListener("click", function () {
  galleryModal4.style.display = "none";
});

// end of modal for GALLERY

//Carousel Images in Modal for GALLERY
const galleryImages1 = [
  "url(cards/gallery-images/5a.jpg)",
  "url(cards/gallery-images/5b.jpg)",
  "url(cards/gallery-images/5c.jpg)",
];

const galleryImages2 = [
  "url(cards/gallery-images/2a.jpg)",
  "url(cards/gallery-images/2b.jpg)",
];

const galleryImages3 = [
  "url(cards/gallery-images/3a.jpg)",
  "url(cards/gallery-images/3b.jpg)",
];

const galleryImages4 = [
  "url(cards/gallery-images/7a.jpg)",
  "url(cards/gallery-images/7b.jpg)",
];

const leftBtn1gallery = document.querySelector("#leftBtn1gallery");
const rightBtn1gallery = document.querySelector("#rightBtn1gallery");

const leftBtn2gallery = document.querySelector("#leftBtn2gallery");
const rightBtn2gallery = document.querySelector("#rightBtn2gallery");

const leftBtn3gallery = document.querySelector("#leftBtn3gallery");
const rightBtn3gallery = document.querySelector("#rightBtn3gallery");

const leftBtn4gallery = document.querySelector("#leftBtn4gallery");
const rightBtn4gallery = document.querySelector("#rightBtn4gallery");

const galleryImage1 = document.querySelector("#galleryImage1");
const galleryImage2 = document.querySelector("#galleryImage2");
const galleryImage3 = document.querySelector("#galleryImage3");
const galleryImage4 = document.querySelector("#galleryImage4");

let galleryIndex1 = 0;
let galleryIndex2 = 0;
let galleryIndex3 = 0;
let galleryIndex4 = 0;

leftBtn1gallery.addEventListener("click", function () {
  //gallery 1
  galleryIndex1--;
  if (galleryIndex1 < 0) {
    galleryIndex1 = galleryImages1.length - 1;
  }
  galleryImage1.style.backgroundImage = galleryImages1[galleryIndex1];
});

leftBtn2gallery.addEventListener("click", function () {
  //gallery 2
  galleryIndex2--;
  if (galleryIndex2 < 0) {
    galleryIndex2 = galleryImages2.length - 1;
  }
  galleryImage2.style.backgroundImage = galleryImages2[galleryIndex2];
});

leftBtn3gallery.addEventListener("click", function () {
  //gallery 3
  galleryIndex3--;
  if (galleryIndex3 < 0) {
    galleryIndex3 = galleryImages3.length - 1;
  }
  galleryImage3.style.backgroundImage = galleryImages3[galleryIndex3];
});

leftBtn4gallery.addEventListener("click", function () {
  //gallery 4
  galleryIndex4--;
  if (galleryIndex4 < 0) {
    galleryIndex4 = galleryImages4.length - 1;
  }
  galleryImage4.style.backgroundImage = galleryImages4[galleryIndex4];
});

rightBtn1gallery.addEventListener("click", function () {
  //gallery 1
  galleryIndex1++;
  if (galleryIndex1 >= galleryImages1.length) {
    galleryIndex1 = 0;
  }
  galleryImage1.style.backgroundImage = galleryImages1[galleryIndex1];
});

rightBtn2gallery.addEventListener("click", function () {
  //gallery 2
  galleryIndex2++;
  if (galleryIndex2 >= galleryImages2.length) {
    galleryIndex2 = 0;
  }
  galleryImage2.style.backgroundImage = galleryImages2[galleryIndex2];
});

rightBtn3gallery.addEventListener("click", function () {
  //gallery 3
  galleryIndex3++;
  if (galleryIndex3 >= galleryImages3.length) {
    galleryIndex3 = 0;
  }
  galleryImage3.style.backgroundImage = galleryImages3[galleryIndex3];
});

rightBtn4gallery.addEventListener("click", function () {
  //gallery 4
  galleryIndex4++;
  if (galleryIndex4 >= galleryImages4.length) {
    galleryIndex4 = 0;
  }
  galleryImage4.style.backgroundImage = galleryImages4[galleryIndex4];
});
