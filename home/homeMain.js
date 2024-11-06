const signoutButton = document.getElementById("sign-out");

var pageOpenedOnce = localStorage.getItem("pageOpenedOnce");
var isSignedIn = localStorage.getItem("signedIn");
var isSavingLogin = localStorage.getItem("isSaving");

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

if (!pageOpenedOnce) {
  pageOpenedOnce = true;
  isSignedIn = true;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
}

if (!isSignedIn) {
  window.location.replace("/index.html");
}

signoutButton.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.replace("/index.html");
  }, 100);
});

window.onbeforeunload = onUnload;

function onUnload() {
  if (!isSavingLogin) isSignedIn = false;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
  localStorage.setItem("signedIn", isSignedIn);
  localStorage.setItem("isSaving", isSavingLogin);
}
