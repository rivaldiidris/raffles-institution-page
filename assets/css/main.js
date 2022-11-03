const mainMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.hamburger-icon');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
