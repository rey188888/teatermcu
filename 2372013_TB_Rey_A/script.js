const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");

let darkMode = localStorage.getItem("darkMode");

function enableDM() {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
    nav.classList.add("navbar-dark");
    nav.classList.add("bg-dark");
    footer.style.background = "black";
    footer.style.color = "white";
    toggle.classList.add("bi-moon");
    toggle.classList.remove("bi-brightness-high-fill");
    localStorage.setItem("darkMode", "enabled");
}

function disableDM() {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-dark");
    footer.style.background = "white";
    footer.style.color = "black";
    toggle.classList.add("bi-brightness-high-fill")
    toggle.classList.remove("bi-moon");
    localStorage.setItem("darkMode", null);
}

if (darkMode == "enabled") {
    enableDM();
}

toggle.addEventListener("click", function() {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode != "enabled") {
        enableDM();
    }
    else {
        disableDM();
    }
});