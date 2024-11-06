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
  "dartsm1288@oshkosh.k12.wi.us",
  "smockh4147@oshkosh.k12.wi.us",
  "schmiw6347@oshkosh.k12.wi.us",
  "leclam1062@oshkosh.k12.wi.us",
  "ellifc2473@oshkosh.k12.wi.us",
];

const passwords = [
  "whatapassword!",
  "bird flu? yeah, they do that.",
  "1",
  "peanut?atthesametime?",
  "Blitz0Stolas4",
  "mckeon",
  "gfed.caiden.kim",
];

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
      }
      window.location.replace("/home/homeIndex.html");
    }
  }

  if (!usernameMatch || !signedIn) {
    loginErrorMessage.style.opacity = 1;
  }
});
