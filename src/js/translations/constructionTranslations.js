const constructionTranslations = {
    'en': {
        'construction-title': '🚧 Under Construction 🚧',
        'construction-message': 'We are working to bring something amazing!',
        'construction-subtitle': 'We will update soon...',
        'back-home': 'Back to Home'
    },
    'pt': {
        'construction-title': '🚧 Em Construção 🚧',
        'construction-message': 'Estamos trabalhando para trazer algo incrível!',
        'construction-subtitle': 'Atualizaremos em breve...',
        'back-home': 'Voltar para o Início'
    }
};

function translateConstructionPage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (constructionTranslations[lang] && constructionTranslations[lang][key]) {
            element.textContent = constructionTranslations[lang][key];
        }
    });
}

document.addEventListener('languageChanged', (event) => {
    translateConstructionPage(event.detail);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateConstructionPage(currentLang);
}); 