function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let fechaMenu = document.querySelector('.fecha-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        fechaMenu.classList.remove('close');
        
        document.querySelector('.icon').src = ".assets/img/icon/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        fechaMenu.classList.add('close');
        document.querySelector('.icon').src = "assets/img/icon/close_white_36dp-white.svg";
    }
}

function fechaMenu() {
    document.querySelector('.fecha-menu').addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('open');
        document.querySelector('.fecha-menu').classList.remove('close');
        document.querySelector('.icon').src = ".assets/img/icon/menu_white_36dp.svg";

    });
}


document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove a classe 'active-btn' de todos os botões
        document.querySelectorAll('.tab-btn').forEach(item => item.classList.remove('active-btn'));
        // Adiciona a classe 'active-btn' ao botão clicado
        this.classList.add('active-btn');

        // Esconde todos os conteúdos e remove a classe 'active-tab'
        document.querySelectorAll('.tab').forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active-tab');
        });
        
        // Mostra o conteúdo correspondente e adiciona a classe 'active-tab'
        const tabId = this.getAttribute('data-tab');
        const activeTab = document.querySelector(tabId);
        activeTab.style.display = 'block';
        activeTab.classList.add('active-tab');
    });
});

// Inicializa a primeira aba como visível e aplica 'display: none' nas outras
const firstTab = document.querySelector('.tab');
firstTab.style.display = 'block';
firstTab.classList.add('active-tab');

document.querySelectorAll('.tab').forEach((tab, index) => {
    if (index !== 0) {
        tab.style.display = 'none';
    }
});





    