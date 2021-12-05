
const $btnHamburguer = document.querySelector('.hamberguer');
const $btnClose = document.querySelector('.style-h-close');

function toggleMenu(){
    const $menu = document.querySelector('.style-h');
    $menu.classList.toggle('open');
}

$btnHamburguer?.addEventListener('click', toggleMenu);
$btnClose?.addEventListener('click', toggleMenu);
