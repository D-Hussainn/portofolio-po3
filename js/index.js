const Logo = document.querySelector(".logo");
const GoToHome = document.querySelector(".home-button");
const GoToOverMij = document.querySelector(".over-mij-button");
const GoToProject = document.querySelector(".project-button");
const GoToMijnScooter = document.querySelector(".scooter-button");


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

