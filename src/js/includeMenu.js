document.addEventListener('DOMContentLoaded', function() {
    // Carrega o menu
    fetch('./src/components/menu.html')
        .then(response => response.text())
        .then(data => {
            // Insere o menu (que já contém seus próprios scripts)
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Carrega os scripts do menu dinamicamente após inserir o HTML
            loadScript('./src/js/menu.js')
                .then(() => loadScript('./src/js/themeLanguage.js'))
                .then(() => {
                    // Inicializa as funcionalidades após carregar os scripts
                    if (typeof initMenu === 'function') initMenu();
                    if (typeof initThemeAndLanguage === 'function') initThemeAndLanguage();
                });
        });
});

// Função auxiliar para carregar scripts
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
} 