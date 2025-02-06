function initThemeAndLanguage() {
    const translations = {
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

    const themeToggle = document.querySelector('.theme-toggle');
    const languageToggle = document.querySelector('.language-toggle');
    let translateWidget = null;
    
    // Carregar preferências salvas
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const currentLang = 'en'; // Força início em inglês
    localStorage.setItem('language', currentLang); // Salva inglês como padrão
    
    // Aplicar tema inicial
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Aplicar idioma inicial
    setLanguage(currentLang);
    updateLanguageIcon(currentLang);
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    languageToggle.addEventListener('click', toggleLanguage);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Força atualização das cores
        document.body.style.backgroundColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--background');
    }

    function updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-icon');
        icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    function toggleLanguage() {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        
        if (newLang === 'pt' && !translateWidget) {
            loadGoogleTranslate();
        } else if (newLang === 'en' && translateWidget) {
            location.reload();
            return;
        }
        
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
        updateLanguageIcon(newLang);
    }

    function loadGoogleTranslate() {
        // Adiciona classe no-translate aos elementos que não devem ser traduzidos
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            typingText.classList.add('notranslate');
        }

        if (!document.getElementById('google_translate_element')) {
            const div = document.createElement('div');
            div.id = 'google_translate_element';
            div.style.display = 'none';
            document.body.appendChild(div);
        }

        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);

        window.googleTranslateElementInit = function() {
            translateWidget = new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'pt',
                autoDisplay: false
            }, 'google_translate_element');
        };
    }

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    function updateLanguageIcon(lang) {
        const icon = document.querySelector('.lang-icon');
        icon.textContent = lang.toUpperCase();
    }
} 