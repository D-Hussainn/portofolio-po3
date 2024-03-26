const Logo = document.querySelector(".logo");
const GoToHome = document.querySelector(".home-button");
const GoToOverMij = document.querySelector(".over-mij-button");
const GoToProject = document.querySelector(".project-button");
const GoToMijnScooter = document.querySelector(".scooter-button");
const GoToSocial = document.querySelector(".socials-footer");
const GoToHogerLager = document.querySelector(".img-hoger-lager");
const GoToEscaperoom = document.querySelector(".img-escaperoom");
const GoToWam = document.querySelector(".img-wam");
// button isn header
Logo.addEventListener("click", () => {
    window.location.href = "/index.html";
});

GoToHome.addEventListener("click", () => {
    window.location.href = "/index.html";
});

GoToOverMij.addEventListener("click", () => {
    window.location.href = "/html/over-mij.html";
});

GoToProject.addEventListener("click", () => {
    window.location.href = "/html/project.html";
});

GoToMijnScooter.addEventListener("click", () => {
    window.location.href = "/html/mijn-scooter.html";
});

GoToSocial.addEventListener("click", () => {
    window.location.href = "/html/over-mij.html";
});

// buttons  in main
GoToHogerLager.addEventListener("click", () => {
    window.location.href = "/html/hoger-lager.html";
});

GoToEscaperoom.addEventListener("click", () => {
    window.location.href = "/html/escaperoom.html";
});

GoToWam.addEventListener("click", () => {
    window.location.href = "/html/WAM.html";
});
