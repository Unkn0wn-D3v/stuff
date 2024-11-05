const signoutButton = document.getElementById("sign-out");

var pageOpenedOnce = localStorage.getItem("pageOpenedOnce");

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
  signedIn = true;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
}

if (!signedIn) {
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
  if (!isSaving) signedIn = false;
  localStorage.setItem("pageOpenedOnce", pageOpenedOnce);
}
