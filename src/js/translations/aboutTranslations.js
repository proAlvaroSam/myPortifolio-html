const aboutTranslations = {
    'en': {
        // Hero Section
        'journey-title': 'My Journey',
        'journey-intro': 'Hello! I\'m Álvaro, a passionate developer creating innovative solutions.',
        
        // Journey Timeline
        'timeline-2023': '2023',
        'timeline-2023-desc': 'Start of studies in web development and programming',
        'timeline-2024': '2024',
        'timeline-2024-desc': 'Development of personal projects and deepening in modern technologies',
        
        // Goals Section
        'goals-title': 'My Goals',
        'short-term-title': 'Short-term',
        'short-term-desc': 'Improve skills in web development and expand knowledge in new technologies',
        
        'medium-term-title': 'Medium-term',
        'medium-term-desc': 'Develop more complex projects and contribute to the open source community',
        
        'long-term-title': 'Long-term',
        'long-term-desc': 'Create innovative solutions that positively impact people\'s lives',
        
        // Skills Section
        'skills-title': 'Skills & Technologies',
        
        // Data Analysis Skills
        'data-skills-title': 'Data Analysis',
        'data-skill-1': 'Data collection and preprocessing',
        'data-skill-2': 'Statistical analysis',
        'data-skill-3': 'Data visualization',
        'data-skill-4': 'Machine learning',
        'data-skill-5': 'Business intelligence',
        
        // Development Skills
        'dev-skills-title': 'Development',
        'dev-skill-1': 'Frontend (HTML, CSS, JavaScript)',
        'dev-skill-2': 'Backend (Python, Node.js)',
        'dev-skill-3': 'Database management',
        'dev-skill-4': 'API development',
        'dev-skill-5': 'Version control (Git)',
        
        // Design Skills
        'design-skills-title': 'UI/UX Design',
        'design-skill-1': 'User interface design',
        'design-skill-2': 'Prototyping',
        'design-skill-3': 'User research',
        'design-skill-4': 'Design systems',
        'design-skill-5': 'Responsive design'
    },
    'pt': {
        // Hero Section
        'journey-title': 'Minha Jornada',
        'journey-intro': 'Olá! Sou Álvaro, um desenvolvedor apaixonado por criar soluções inovadoras.',
        
        // Journey Timeline
        'timeline-2023': '2023',
        'timeline-2023-desc': 'Início dos estudos em desenvolvimento web e programação',
        'timeline-2024': '2024',
        'timeline-2024-desc': 'Desenvolvimento de projetos pessoais e aprofundamento em tecnologias modernas',
        
        // Goals Section
        'goals-title': 'Meus Objetivos',
        'short-term-title': 'Curto prazo',
        'short-term-desc': 'Aprimorar habilidades em desenvolvimento web e expandir conhecimentos em novas tecnologias',
        
        'medium-term-title': 'Médio prazo',
        'medium-term-desc': 'Desenvolver projetos mais complexos e contribuir para a comunidade open source',
        
        'long-term-title': 'Longo prazo',
        'long-term-desc': 'Criar soluções inovadoras que impactem positivamente a vida das pessoas',
        
        // Skills Section
        'skills-title': 'Habilidades & Tecnologias',
        
        // Data Analysis Skills
        'data-skills-title': 'Análise de Dados',
        'data-skill-1': 'Coleta e pré-processamento de dados',
        'data-skill-2': 'Análise estatística',
        'data-skill-3': 'Visualização de dados',
        'data-skill-4': 'Machine learning',
        'data-skill-5': 'Inteligência de negócios',
        
        // Development Skills
        'dev-skills-title': 'Desenvolvimento',
        'dev-skill-1': 'Frontend (HTML, CSS, JavaScript)',
        'dev-skill-2': 'Backend (Python, Node.js)',
        'dev-skill-3': 'Gerenciamento de banco de dados',
        'dev-skill-4': 'Desenvolvimento de APIs',
        'dev-skill-5': 'Controle de versão (Git)',
        
        // Design Skills
        'design-skills-title': 'Design UI/UX',
        'design-skill-1': 'Design de interface do usuário',
        'design-skill-2': 'Prototipagem',
        'design-skill-3': 'Pesquisa de usuário',
        'design-skill-4': 'Sistemas de design',
        'design-skill-5': 'Design responsivo'
    }
};

function translateAboutPage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (aboutTranslations[lang] && aboutTranslations[lang][key]) {
            element.textContent = aboutTranslations[lang][key];
        }
    });
}

document.addEventListener('languageChanged', (event) => {
    translateAboutPage(event.detail);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateAboutPage(currentLang);
}); 