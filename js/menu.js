const menuOpen = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');

const hoverMenu1 = document.querySelector('.main-text1');
const hoverMenu2 = document.querySelector('.main-text2');

// Открытие/закрытие меню
menuOpen.onclick = function() {
    document.querySelector('.menu-container').style.display = 'block';
}
menuClose.onclick = function() {
    document.querySelector('.menu-container').style.display = 'none';
}

// Меню ховер эффекты
hoverMenu1.addEventListener('mouseover', () => {
    document.querySelector('.hover-menu1').style.display = 'block';
})
hoverMenu1.addEventListener('mouseout', () => {
    document.querySelector('.hover-menu1').style.display = 'none';
})

hoverMenu2.addEventListener('mouseover', () => {
    document.querySelector('.hover-menu2').style.display = 'block';
})
hoverMenu2.addEventListener('mouseout', () => {
    document.querySelector('.hover-menu2').style.display = 'none';
})