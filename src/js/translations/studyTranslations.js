const studyTranslations = {
    'en': {
        'study-title': 'Study Corner',
        'study-subtitle': 'Resources and guides for learning programming',
        'languages-title': 'Programming Languages',
        'resources-title': 'Learning Resources',
        'projects-title': 'Practice Projects',
        'docs-title': 'Documentation',
        'videos-title': 'Video Tutorials',
        'exercises-title': 'Exercises',
        'beginner-title': 'Beginner',
        'intermediate-title': 'Intermediate',
        'advanced-title': 'Advanced',
        'study-message': 'I created this corner so that you and I can study together!',
        
        // Study Like Me
        'my-path-title': 'Study Like Me',
        'journey-title': 'My Learning Path',
        'method-title': 'Study Method',
        'roadmap-title': 'Personal Roadmap',
        
        // Tools
        'tools-title': 'Recommended Tools',
        'editors-title': 'Code Editors',
        'extensions-title': 'VSCode Extensions',
        'devtools-title': 'Dev Tools',
        
        // Content
        'content-title': 'Learning Content',
        'youtube-title': 'YouTube Channels',
        'courses-title': 'Free Courses',
        'books-title': 'Book Recommendations',
        
        // Practice
        'practice-title': 'Practice & Challenges',
        'sites-title': 'Coding Sites',
        'ideas-title': 'Project Ideas',
        'challenges-title': 'Weekly Challenges',
        'featured-title': '📌 Tip of the Week',
        'featured-message': 'Start with the basics and practice every day. Consistency is the key to learning programming!',
        'featured-quote': '"The only way to learn a new programming language is by writing programs in it."',
        'featured-author': '- Dennis Ritchie',
        'quick-links-title': 'Quick Access',
        'beginner-guide': "Beginner's Guide",
        'first-steps': 'First Steps',
        'start-project': 'Start a Project',
        'welcome-title': '👋 Welcome to Study Corner!',
        'welcome-text': "Here you'll find everything you need to start your programming journey. From basic concepts to advanced projects, let's learn together!",
        'stat-resources': 'Learning Resources',
        'stat-exercises': 'Practice Exercises',
        'stat-projects': 'Complete Projects',
        'construction-notice': '🚧 This page is under construction! Soon, I will bring amazing programming content, detailed tutorials, and useful resources to help you on your learning journey. Stay tuned! 😊'
    },
    'pt': {
        'study-title': 'Canto de Estudos',
        'study-subtitle': 'Recursos e guias para aprender programação',
        'languages-title': 'Linguagens de Programação',
        'resources-title': 'Recursos de Aprendizagem',
        'projects-title': 'Projetos Práticos',
        'docs-title': 'Documentação',
        'videos-title': 'Tutoriais em Vídeo',
        'exercises-title': 'Exercícios',
        'beginner-title': 'Iniciante',
        'intermediate-title': 'Intermediário',
        'advanced-title': 'Avançado',
        'study-message': 'Eu criei este canto para que eu e você possamos estudar juntos!',
        
        // Study Like Me
        'my-path-title': 'Estude Como Eu',
        'journey-title': 'Minha Jornada de Aprendizado',
        'method-title': 'Método de Estudo',
        'roadmap-title': 'Meu Roteiro de estudos',
        
        // Tools
        'tools-title': 'Ferramentas Recomendadas',
        'editors-title': 'Editores de Código',
        'extensions-title': 'Extensões VSCode',
        'devtools-title': 'Ferramentas Dev',
        
        // Content
        'content-title': 'Conteúdo de Aprendizado',
        'youtube-title': 'Canais do YouTube',
        'courses-title': 'Cursos Gratuitos',
        'books-title': 'Recomendações de Livros',
        
        // Practice
        'practice-title': 'Prática & Desafios',
        'sites-title': 'Sites de Programação',
        'ideas-title': 'Ideias de Projetos',
        'challenges-title': 'Desafios Semanais',
        'featured-title': '📌 Dica da Semana',
        'featured-message': 'Comece com o básico e pratique todos os dias. Consistência é a chave para aprender programação!',
        'featured-quote': '"A única maneira de aprender uma nova linguagem de programação é escrevendo programas nela."',
        'featured-author': '- Dennis Ritchie',
        'quick-links-title': 'Acesso Rápido',
        'beginner-guide': 'Guia para Iniciantes',
        'first-steps': 'Primeiros Passos',
        'start-project': 'Iniciar um Projeto',
        'welcome-title': '👋 Bem-vindo ao Canto de Estudos!',
        'welcome-text': 'Aqui você encontrará tudo que precisa para começar sua jornada na programação. Desde conceitos básicos até projetos avançados, vamos aprender juntos!',
        'stat-resources': 'Recursos de Aprendizado',
        'stat-exercises': 'Exercícios Práticos',
        'stat-projects': 'Projetos Completos',
        'construction-notice': '🚧 Esta página está em construção! Em breve, trarei conteúdos incríveis sobre programação, tutoriais detalhados e recursos úteis para ajudar em sua jornada de aprendizado. Fique ligado! 😊'
    }
};

function translateStudyPage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (studyTranslations[lang] && studyTranslations[lang][key]) {
            element.textContent = studyTranslations[lang][key];
        }
    });
}

document.addEventListener('languageChanged', (event) => {
    translateStudyPage(event.detail);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateStudyPage(currentLang);
}); 