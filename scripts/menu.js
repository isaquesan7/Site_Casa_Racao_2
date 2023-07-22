const btnMobile = document.getElementById('btn-Mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);