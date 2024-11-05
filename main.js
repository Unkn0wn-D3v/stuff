const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-button");
const loginErrorMessage = document.getElementById("login-error-msg");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("stay-signed-in");

localStorage.clear();

var usernameMatch = false;
var signedIn = localStorage.getItem("signedIn");
var usernameNumber = null;
var currentUsername = null;
var correlatingPassword = null;
var isSaving = null;

switch (signedIn) {
  case "true":
    signedIn = true;
    break;
  case "false":
    signedIn = false;
    break;
  default:
    signedIn = false;
}

const usernames = [
  "kimc1145@oshkosh.k12.wi.us",
  "bransj2426@oshkosh.k12.wi.us",
];

const passwords = ["whatapassword!", "whatapassword!"];

if (signedIn) window.location.replace("/home/homeIndex.html");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  for (let step = 0; step < usernames.length; step++) {
    currentUsername = usernames[step];
    if (username == currentUsername) {
      usernameMatch = true;
      usernameNumber = step;
      break;
    }
  }

  if (usernameMatch) {
    correlatingPassword = passwords[usernameNumber];
    if (password == correlatingPassword) {
      signedIn = true;
      if (checkbox.checked) {
        isSaving = true;
        localStorage.setItem("signedIn", signedIn);
        localStorage.setItem("isSaving", isSaving);
        /*
        FIX THIS, THE PAGE IS STILL REMEMBERING YOU EVEN IF THE ISSAVING VALUE IS FALSE
        */
      }
      window.location.replace("/home/homeIndex.html");
    }
  }

  if (!usernameMatch || !signedIn) {
    loginErrorMessage.style.opacity = 1;
  }
});
