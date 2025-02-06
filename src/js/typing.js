function typeWriter() {
    // Pega o idioma atual do localStorage, com fallback para 'en'
    const currentLang = localStorage.getItem('language') || 'en';
    
    const texts = {
        'en': [
            "Hello, World!!",
            "I'm Dev, Álvaro"
        ],
        'pt': [
            "Olá, Mundo!!",
            "Sou Dev, Álvaro"
        ]
    };
    
    let textIndex = 0;
    let charIndex = 0;
    const typingText = document.querySelector('.typing-text');
    const currentTexts = texts[currentLang];
    
    function type() {
        if (textIndex >= currentTexts.length) {
            textIndex = 0;
        }
        
        if (charIndex < currentTexts[textIndex].length) {
            typingText.textContent += currentTexts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typingText.textContent = currentTexts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex++;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// Inicia a animação
document.addEventListener('DOMContentLoaded', typeWriter);

// Reinicia a animação quando o idioma mudar
document.addEventListener('languageChanged', function() {
    const typingText = document.querySelector('.typing-text');
    typingText.textContent = '';
    typeWriter();
});