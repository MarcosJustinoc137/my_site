
const anoAtual = document.getElementById("ano-atual");

anoAtual.textContent = new Date().getFullYear();



// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const menuAberto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
});

// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll(".nav-links a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});