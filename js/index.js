//Navigation
const menu = document.querySelector('.menu-btn');
const list = document.querySelector('.navbar');
menu.onclick = function(){
    menu.classList.toggle('active');
    list.classList.toggle('active');
}