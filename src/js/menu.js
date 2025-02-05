const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('.navbar ul');
const body = document.body;

// Criar o elemento de blur overlay
const blurOverlay = document.createElement('div');
blurOverlay.className = 'blur-overlay';
document.body.appendChild(blurOverlay);

// Função para abrir/fechar o menu
function toggleMenu() {
    console.log('Toggle menu clicked'); // Debug
    menuToggle.classList.toggle('active');
    navbarUl.classList.toggle('active');
    blurOverlay.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Event listeners
menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});

// Fechar menu ao clicar no overlay
blurOverlay.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Adicionar delay na animação dos links
function addLinkAnimations() {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
    });
}

addLinkAnimations();

// Ajustar visibilidade do menu ao redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarUl.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Ajustar posição do menu ao rolar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !navbarUl.classList.contains('active')) {
        // Scroll Down - esconde o menu
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up - mostra o menu
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}); 