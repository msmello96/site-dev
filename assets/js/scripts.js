function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let fechaMenu = document.querySelector('.fecha-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        fechaMenu.classList.remove('close');
        
        document.querySelector('.menu-icon').src = "./assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        fechaMenu.classList.add('close');
        document.querySelector('.menu-icon').src = "./assets/img/close_white_36dp-white.svg";
    }
}

function fechaMenu() {
    document.querySelector('.fecha-menu').addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('open');
        document.querySelector('.fecha-menu').classList.remove('close');
        document.querySelector('.menu-icon').src = "./assets/img/menu_white_36dp.svg";

    });
}

function topFunction() {
    if (window.innerWidth <= 576) {
        const targetElement = document.getElementById('mobile-anchor');
        targetElement.scrollIntoView();


    } else {

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
        setTimeout(() => {
            const inputField = document.getElementById('nome');
            if (inputField) {
                inputField.focus();
            }
        }, 500);
        
    }
}
