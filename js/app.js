const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function togglemenu() {
    menu.classList.toggle("menu_opened");

}

openMenuBtn.addEventListener("click", togglemenu);
closeMenuBtn.addEventListener("click", togglemenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink=> {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })
})