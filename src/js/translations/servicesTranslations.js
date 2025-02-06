const servicesTranslations = {
    'en': {
        // Hero Section
        'services-title': 'My Services',
        'services-subtitle': 'Solutions in Data Analysis and Development',
        
        // Data Analysis Card
        'analysis-title': 'Data Analysis',
        'analysis-desc': 'Transform raw data into valuable insights for your business.',
        'analysis-list-1': 'Data collection and cleaning',
        'analysis-list-2': 'Statistical analysis',
        'analysis-list-3': 'Data visualization',
        'analysis-list-4': 'Business intelligence',
        
        // Web Development Card
        'dev-title': 'Web Development',
        'dev-desc': 'Create modern and responsive websites with the latest technologies.',
        'dev-list-1': 'Responsive websites',
        'dev-list-2': 'Web applications',
        'dev-list-3': 'API integration',
        'dev-list-4': 'Performance optimization',
        
        // UI/UX Design Card
        'design-title': 'UI/UX Design',
        'design-desc': 'Design intuitive and beautiful interfaces focused on user experience.',
        'design-list-1': 'User interface design',
        'design-list-2': 'User experience research',
        'design-list-3': 'Prototyping',
        'design-list-4': 'Design systems',
        
        // Work Methodology Section
        'methodology-title': 'Work Methodology',
        'data-collection': 'Data Collection',
        'data-collection-desc': 'Identification and collection of relevant data sources',
        'analysis': 'Analysis',
        'analysis-process': 'Processing and exploratory analysis of data',
        'modeling': 'Modeling',
        'modeling-desc': 'Development of models and solutions',
        'implementation': 'Implementation',
        'implementation-desc': 'Deployment and monitoring of solutions'
    },
    'pt': {
        // Hero Section
        'services-title': 'Meus Serviços',
        'services-subtitle': 'Soluções em Análise de Dados e Desenvolvimento',
        
        // Data Analysis Card
        'analysis-title': 'Análise de Dados',
        'analysis-desc': 'Transforme dados brutos em insights valiosos para seu negócio.',
        'analysis-list-1': 'Coleta e limpeza de dados',
        'analysis-list-2': 'Análise estatística',
        'analysis-list-3': 'Visualização de dados',
        'analysis-list-4': 'Inteligência de negócios',
        
        // Web Development Card
        'dev-title': 'Desenvolvimento Web',
        'dev-desc': 'Crie sites modernos e responsivos com as últimas tecnologias.',
        'dev-list-1': 'Sites responsivos',
        'dev-list-2': 'Aplicações web',
        'dev-list-3': 'Integração de APIs',
        'dev-list-4': 'Otimização de performance',
        
        // UI/UX Design Card
        'design-title': 'Design UI/UX',
        'design-desc': 'Design de interfaces intuitivas e bonitas focadas na experiência do usuário.',
        'design-list-1': 'Design de interface do usuário',
        'design-list-2': 'Pesquisa de experiência do usuário',
        'design-list-3': 'Prototipagem',
        'design-list-4': 'Sistemas de design',
        
        // Work Methodology Section
        'methodology-title': 'Metodologia de Trabalho',
        'data-collection': 'Coleta de Dados',
        'data-collection-desc': 'Identificação e coleta de fontes de dados relevantes',
        'analysis': 'Análise',
        'analysis-process': 'Processamento e análise exploratória dos dados',
        'modeling': 'Modelagem',
        'modeling-desc': 'Desenvolvimento de modelos e soluções',
        'implementation': 'Implementação',
        'implementation-desc': 'Implantação e monitoramento das soluções'
    }
};

function translateServicesPage(lang) {
    // Traduz elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (servicesTranslations[lang] && servicesTranslations[lang][key]) {
            element.textContent = servicesTranslations[lang][key];
        }
    });
}

// Escuta mudanças de idioma do menu
document.addEventListener('languageChanged', (event) => {
    translateServicesPage(event.detail);
});

// Traduz a página quando carregada
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateServicesPage(currentLang);
}); 