document.addEventListener('DOMContentLoaded', function() {
    fetch('./src/components/menu.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // menu.js auto-initializes when loaded
            loadScript('./src/js/menu.js')
                .then(() => loadScript('./src/js/themeLanguage.js'))
                .then(() => {
                    if (typeof initThemeAndLanguage === 'function') initThemeAndLanguage();
                });
        });
});

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}
