const contactTranslations = {
    'en': {
        'contact-title': "Let's Connect!",
        'contact-subtitle': 'Choose how you want to get in touch',
        'email-desc': 'Send me a message anytime',
        'email-button': 'Copy Email',
        'email-copied': 'Email Copied!',
        'linkedin-desc': "Let's connect professionally",
        'linkedin-button': 'Connect',
        'github-desc': 'Check out my projects',
        'github-button': 'Follow Me',
        'whatsapp-desc': "Let's chat directly",
        'whatsapp-button': 'Message Me'
    },
    'pt': {
        'contact-title': 'Vamos Conectar!',
        'contact-subtitle': 'Escolha como deseja entrar em contato',
        'email-desc': 'Me envie uma mensagem quando quiser',
        'email-button': 'Copiar Email',
        'email-copied': 'Email Copiado!',
        'linkedin-desc': 'Vamos nos conectar profissionalmente',
        'linkedin-button': 'Conectar',
        'github-desc': 'Confira meus projetos',
        'github-button': 'Me Siga',
        'whatsapp-desc': 'Vamos conversar diretamente',
        'whatsapp-button': 'Me Mande uma Mensagem'
    }
};

function translateContactPage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (contactTranslations[lang] && contactTranslations[lang][key]) {
            element.textContent = contactTranslations[lang][key];
        }
    });
}

document.addEventListener('languageChanged', (event) => {
    translateContactPage(event.detail);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateContactPage(currentLang);
});