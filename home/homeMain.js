//DEFINING BUTTONS
const signoutButton = document.getElementById("sign-out");
const tournamentButton = document.getElementById("randomize-tourney");

//OTHER CONSTANTS
const tournamentText = document.getElementById("tournament-text");

//TABLES
const availableTournaments = ["FIFA", "Super Smash Bros Ultimate"];

//OTHER VARIABLES
var pageOpenedOnce = localStorage.getItem("pageOpenedOnce");
var isSignedIn = localStorage.getItem("signedIn");
var isSavingLogin = localStorage.getItem("isSaving");

//VARIABLE CHECKS
switch (pageOpenedOnce) {
  case "true":
    pageOpenedOnce = true;
    break;
  case "false":
    pageOpenedOnce = false;
    break;
  default:
    pageOpenedOnce = false;
}

switch (isSignedIn) {
  case "true":
    isSignedIn = true;
    break;
  case "false":
    isSignedIn = false;
    break;
  default:
    isSignedIn = false;
}

//NEW VISITOR CHECK
if (!pageOpenedOnce) {
  pageOpenedOnce = true;
  isSignedIn = true;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
}

//SIGNED IN CHECK(CURRENTLY HALF-BROKEN)
if (!isSignedIn) {
  window.location.replace("/index.html");
}

/*
BUTTONS START HERE
*/

//Signout button, signs the user out of the website and redirects them to the sign-in page
signoutButton.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.replace("/index.html");
  }, 100);
});

//Generates a random tournament and sets the text content of the paragraph in the html documment
tournamentButton.addEventListener("click", () => {
  var chosenTournament =
    availableTournaments[
      Math.floor(Math.random() * availableTournaments.length)
    ];
});

window.onbeforeunload = onUnload;

//FUNCTIONS
function onUnload() {
  if (!isSavingLogin) isSignedIn = false;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
  localStorage.setItem("signedIn", isSignedIn);
  localStorage.setItem("isSaving", isSavingLogin);
}
