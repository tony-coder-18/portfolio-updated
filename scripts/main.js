let ham = document.querySelector(".ham");
let nav = document.querySelector(".navegation-top");
let menuLinks = document.querySelectorAll(".menu-link");

//Event Listener:
ham.addEventListener("click", showNavFun);

//Functions:
function showNavFun() {
  nav.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

menuLinks.forEach (
    function(menuLinks) {
        menuLinks.addEventListener("click", showNavFun)
    }
)