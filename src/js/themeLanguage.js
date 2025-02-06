// Traduções do menu (comum a todas as páginas)
const menuTranslations = {
    'en': {
        'home': 'home',
        'about': 'about',
        'services': 'services',
        'portfolio': 'portfolio',
        'contact': 'contact Me',
        'study': 'study Corner'
    },
    'pt': {
        'home': 'início',
        'about': 'sobre',
        'services': 'serviços',
        'portfolio': 'portfólio',
        'contact': 'contato',
        'study': 'área de estudos'
    }
};

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    
    // Atualiza o localStorage
    localStorage.setItem('language', newLang);
    
    // Atualiza o ícone
    const icon = document.querySelector('.lang-icon');
    if (icon) {
        icon.textContent = newLang.toUpperCase();
    }
    
    // Atualiza as traduções do menu
    setMenuLanguage(newLang);
    
    // Dispara evento para notificar outras páginas
    const event = new CustomEvent('languageChanged', { detail: newLang });
    document.dispatchEvent(event);
}

function setMenuLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (menuTranslations[lang] && menuTranslations[lang][key]) {
            element.textContent = menuTranslations[lang][key];
        }
    });
}

// Inicialização
function initThemeAndLanguage() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const currentLang = localStorage.getItem('language') || 'en';
    
    const langIcon = document.querySelector('.lang-icon');
    if (langIcon) {
        langIcon.textContent = currentLang.toUpperCase();
    }
    
    setMenuLanguage(currentLang);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initThemeAndLanguage);

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    }
} 