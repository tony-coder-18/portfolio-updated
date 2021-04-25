let hamburger = document.querySelector('.button-expand');

let navList = document.querySelector('.navb-cont');

let navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', navbarToggle);

for (let i=0; i<navLinks.length; i++) {

    navLinks[i].addEventListener('click', navbarToggle);
    
}

function navbarToggle(){
    navList.classList.toggle('hidden');
}