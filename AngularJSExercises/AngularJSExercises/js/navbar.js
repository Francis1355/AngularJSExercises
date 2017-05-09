
var navbar = document.querySelector('nav');

function navbarCollapse() {
    if(window.scrollY>0){
        navbar.classList.add('navbar-custom-close');
        navbar.classList.remove('navbar-custom');
    }else {
        navbar.classList.remove('navbar-custom-close');
        navbar.classList.add('navbar-custom');
    }
}

document.addEventListener('scroll',navbarCollapse);