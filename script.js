const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('open');
};
window.onscroll  = () => {
    menu.classlist.remove('bx-x');
    navlist.classlist.remove('open');
};