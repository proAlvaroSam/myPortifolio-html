// Menu mobile toggle and scroll behavior
function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarUl = document.querySelector('.navbar ul');
    const body = document.body;

    if (!menuToggle || !navbarUl) return;

    // Blur overlay
    const blurOverlay = document.createElement('div');
    blurOverlay.className = 'blur-overlay';
    document.body.appendChild(blurOverlay);

    // Close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-menu';
    closeButton.innerHTML = '×';
    navbarUl.appendChild(closeButton);

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navbarUl.classList.toggle('active');
        blurOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navbarUl.classList.remove('active');
        blurOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    }

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    closeButton.addEventListener('click', closeMenu);
    blurOverlay.addEventListener('click', closeMenu);

    // Close on link click
    navbarUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Reset on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

    // Hide/show navbar on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        if (currentScroll > lastScroll && !navbarUl.classList.contains('active')) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
}

// Auto-init on DOMContentLoaded (for dynamic load via includeMenu.js)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
} else {
    initMenu();
}
