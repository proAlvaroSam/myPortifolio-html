const translations = {
    'pt': {
        // Cabeçalho
        'study-corner-title': 'Canto de Estudos',
        'study-corner-subtitle': 'Recursos e guias para aprender programação',
        'study-corner-description': 'Eu criei este canto para que eu e você possamos estudar juntos!',
        'construction-message': '🚧 Esta página está em construção! Em breve, trarei conteúdos incríveis sobre programação, tutoriais detalhados e recursos úteis para ajudar em sua jornada de aprendizado. Fique ligado! 😊',

        // Seção de Conteúdo de Aprendizado
        'learning-content': 'Conteúdo de Aprendizado',
        'learning-content-desc': 'Descubra novos canais e cursos para aprender mais sobre programação.',
        'channels': 'Canais',
        'channels-description': 'Canais que me ajudaram na jornada dev.',
        'free-courses': 'Cursos Gratuitos',
        'free-courses-desc': 'Aprenda programação sem pagar nada',
        'book-recommendations': 'Recomendações de Livros',
        'book-recommendations-desc': 'Leia livros sobre programação',
        
        // Seção de Prática & Desafios
        'practice-challenges': 'Prática & Desafios',
        'practice-challenges-desc': 'Pratique e desafie-se com projetos reais.',
        'programming-sites': 'Sites de Programação',
        'programming-sites-desc': 'Codifique e aprenda com projetos práticos',
        'project-ideas': 'Ideias de Projetos',
        'project-ideas-desc': 'Inspire-se com novas ideias',
        'weekly-challenges': 'Desafios Semanais',
        'weekly-challenges-desc': 'Aumente seu nível de programação',

        // Seção de Ferramentas
        'tools': 'Ferramentas',
        'tools-desc': 'Ferramentas úteis para desenvolvedores',
        'dev-tools': 'Dev Tools',
        'dev-tools-desc': 'Ferramentas úteis para desenvolvedores',
        'recommended-tools': 'Ferramentas Recomendadas',
        'recommended-tools-desc': 'Ferramentas que uso no dia a dia.',
        'vscode-extensions': 'VSCode Extensions',
        'vscode-extensions-desc': 'Extensões que uso no VSCode',
        'design-tools': 'Design Tools',
        'design-tools-desc': 'Ferramentas para design e prototipagem',
        'utilities': 'Utilitários',
        'utilities-desc': 'Ferramentas úteis para produtividade',
        
        // Status
        'status-available': '🔓 Disponível',
        'status-soon': '🔒 Em breve',
    },
    'en': {
        // Header
        'study-corner-title': 'Study Corner',
        'study-corner-subtitle': 'Resources and guides to learn programming',
        'study-corner-description': 'I created this corner so we can study together!',
        'construction-message': '🚧 This page is under construction! Soon, I will bring amazing programming content, detailed tutorials, and useful resources to help you on your learning journey. Stay tuned! 😊',

        // Learning Content Section
        'learning-content': 'Learning Content',
        'learning-content-desc': 'Discover new channels and courses to learn more about programming.',
        'channels': 'Channels',
        'channels-description': 'Channels that helped me in my dev journey.',
        'free-courses': 'Free Courses',
        'free-courses-desc': 'Learn programming for free',
        'book-recommendations': 'Book Recommendations',
        'book-recommendations-desc': 'Read programming books',
        
        // Practice & Challenges Section
        'practice-challenges': 'Practice & Challenges',
        'practice-challenges-desc': 'Practice and challenge yourself with real projects.',
        'programming-sites': 'Programming Sites',
        'programming-sites-desc': 'Code and learn with practical projects',
        'project-ideas': 'Project Ideas',
        'project-ideas-desc': 'Get inspired with new ideas',
        'weekly-challenges': 'Weekly Challenges',
        'weekly-challenges-desc': 'Increase your programming level',

        // Tools Section
        'tools': 'Tools',
        'tools-desc': 'Useful tools for developers',
        'dev-tools': 'Dev Tools',
        'dev-tools-desc': 'Useful tools for developers',
        'recommended-tools': 'Recommended Tools',
        'recommended-tools-desc': 'Tools I use daily.',
        'vscode-extensions': 'VSCode Extensions',
        'vscode-extensions-desc': 'Extensions I use in VSCode',
        'design-tools': 'Design Tools',
        'design-tools-desc': 'Tools for design and prototyping',
        'utilities': 'Utilities',
        'utilities-desc': 'Useful tools for productivity',
        
        // Status
        'status-available': '🔓 Available',
        'status-soon': '🔒 Coming soon',
    }
};

// Função para traduzir a página
function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Escuta mudanças de idioma
document.addEventListener('languageChanged', (event) => {
    translatePage(event.detail);
});

// Traduz a página quando carregada
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'pt';
    translatePage(currentLang);
}); 