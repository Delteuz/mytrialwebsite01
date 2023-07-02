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

// Start of BTN Change BG
const videoSources = [
  "Resources/Videos/Kurone BG1.m4v",
  "Resources/Videos/Sora BG1.m4v",
  "Resources/Videos/Sora BG2.m4v",
];

const menuGirlSources = [
  'url("Resources/charmenu1.gif")',
  'url("Resources/charmenu2.gif")',
  'url("Resources/charmenu3.gif")',
];

const audioSources = [
  "Resources/Audios/Kurone1.mp3",
  "Resources/Audios/Sora1.mp3",
  "Resources/Audios/Sora2.mp3",
];

//indexing for Main Video
let currentIndex = 0;
const changeButton = document.getElementById("BTNchangeBG");
const targetVideo = document.getElementById("targetVideo");
const targetAudio = document.getElementById("BGMusic");

function changeVideo() {
  targetVideo.src = "Resources/Videos/glitchBG.m4v";
  setTimeout(afterGlitch, 260);
  changeMenuGirl();
  function afterGlitch() {
    currentIndex = (currentIndex + 1) % videoSources.length;

    targetVideo.src = videoSources[currentIndex];
    targetAudio.src = audioSources[currentIndex];
  }
}
//Changing menu Girl
let currentIndex2 = 0;
let menuGirl = document.getElementById("menuGirl");
function changeMenuGirl() {
  currentIndex2 = (currentIndex2 + 1) % menuGirlSources.length;
  menuGirl.style.backgroundImage = menuGirlSources[currentIndex2];
} //end of change menu girl

//End of BTN Change BG

//Sidebar

//Start of BG Audio
var btnSpeaker = document.querySelector(".btnSpeaker i");
var BGMusic = document.getElementById("BGMusic");
BGMusic.pause();
btnSpeaker.addEventListener("click", function () {
  if (BGMusic.muted) {
    BGMusic.muted = false;
    btnSpeaker.classList.replace("fa-volume-mute", "fa-volume-up");
  } else {
    BGMusic.muted = true;
    btnSpeaker.classList.replace("fa-volume-up", "fa-volume-mute");
  }
});

//End of BG Audio

// Share Button on social media
var link = "https://delteuz.github.io/projectHololive/";

var shareButtonFB = document.getElementById("btnShareToFB");
var shareButtonTwitter = document.getElementById("btnShareToTwitter");
var shareButtonLine = document.getElementById("btnShareToLine");

shareButtonFB.addEventListener("click", function () {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + link, "_blank");
});

shareButtonTwitter.addEventListener("click", function () {
  window.open("https://twitter.com/intent/tweet?url=" + link, "_blank");
});

shareButtonLine.addEventListener("click", function () {
  window.open("https://line.me/R/msg/text/?" + link, "_blank");
});

//End of Share Button on Social Media

//modal 0

const modal0 = document.getElementById("modal0");
const closeButton0 = document.getElementById("close-modal0");

closeButton0.addEventListener("click", function () {
  modal0.style.display = "none";
  BGMusic.play();
});

// modal for characters
//char1
const char1 = document.getElementById("char1");
const modal1 = document.getElementById("modal1");
const closeButton = document.getElementById("close-modal1");

char1.addEventListener("click", function () {
  modal1.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal1.style.display = "none";
});
//char2
const char2 = document.getElementById("char2");
const modal2 = document.getElementById("modal2");
const closeButton2 = document.getElementById("close-modal2");

char2.addEventListener("click", function () {
  modal2.style.display = "block";
});

closeButton2.addEventListener("click", function () {
  modal2.style.display = "none";
});

//char3
const char3 = document.getElementById("char3");
const modal3 = document.getElementById("modal3");
const closeButton3 = document.getElementById("close-modal3");

char3.addEventListener("click", function () {
  modal3.style.display = "block";
});

closeButton3.addEventListener("click", function () {
  modal3.style.display = "none";
});

//char4
const char4 = document.getElementById("char4");
const modal4 = document.getElementById("modal4");
const closeButton4 = document.getElementById("close-modal4");

char4.addEventListener("click", function () {
  modal4.style.display = "block";
});

closeButton4.addEventListener("click", function () {
  modal4.style.display = "none";
});

//char5
const char5 = document.getElementById("char5");
const modal5 = document.getElementById("modal5");
const closeButton5 = document.getElementById("close-modal5");

char5.addEventListener("click", function () {
  modal5.style.display = "block";
});

closeButton5.addEventListener("click", function () {
  modal5.style.display = "none";
});

//char6
const char6 = document.getElementById("char6");
const modal6 = document.getElementById("modal6");
const closeButton6 = document.getElementById("close-modal6");

char6.addEventListener("click", function () {
  modal6.style.display = "block";
});

closeButton6.addEventListener("click", function () {
  modal6.style.display = "none";
});

//char7
const char7 = document.getElementById("char7");
const modal7 = document.getElementById("modal7");
const closeButton7 = document.getElementById("close-modal7");

char7.addEventListener("click", function () {
  modal7.style.display = "block";
});

closeButton7.addEventListener("click", function () {
  modal7.style.display = "none";
});

// end of modal for characters
