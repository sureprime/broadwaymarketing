let menubar = document.querySelector('#menubar');
let mynavbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynavbar.classList.toggle('active');
}