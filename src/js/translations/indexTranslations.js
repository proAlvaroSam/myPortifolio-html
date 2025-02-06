const indexTranslations = {
    'en': {
        'hello-dev': 'Hello Dev!!',
        'welcome': "It's a pleasure to have you here.",
        'portfolio-intro': 'My name is Álvaro and you are on my portfolio.',
        'description': 'I am a programming student who loves to learn new technologies and is always open to new challenges.',
        'portfolio-quote': 'Here, besides my professional experiences, I will also include curiosities about programming or the tech world.',
        'role': 'DATA ANALYST + FULL-STACK + UI/UX DESIGNER 🧑🏻‍💻',
        'here-me': 'here Me'
    },
    'pt': {
        'hello-dev': 'Olá Dev!!',
        'welcome': 'É um prazer ter você aqui.',
        'portfolio-intro': 'Meu nome é Álvaro e você está no meu portfólio.',
        'description': 'Sou um estudante de programação que adora aprender novas tecnologias e está sempre aberto a novos desafios.',
        'portfolio-quote': 'Aqui, além das minhas experiências profissionais, também incluirei curiosidades sobre programação ou o mundo da tecnologia.',
        'role': 'ANALISTA DE DADOS + FULL-STACK + DESIGNER UI/UX 🧑🏻‍💻',
        'here-me': 'fale Comigo'
    }
};

function translateIndexPage(lang) {
    // Traduz elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (indexTranslations[lang] && indexTranslations[lang][key]) {
            element.textContent = indexTranslations[lang][key];
        }
    });
}

// Escuta mudanças de idioma do menu
document.addEventListener('languageChanged', (event) => {
    translateIndexPage(event.detail);
});

// Traduz a página quando carregada
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateIndexPage(currentLang);
}); 