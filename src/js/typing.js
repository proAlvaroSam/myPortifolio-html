function typeWriter() {
    // Textos sempre em inglês
    const texts = [
        "Hello, World!!",
        "I'm Dev, Álvaro"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const typingText = document.querySelector('.typing-text');
    
    // Limpa o texto anterior
    if (typingText) {
        typingText.textContent = '';
    }
    
    function type() {
        if (!typingText) return;
        
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
        
        if (charIndex < texts[textIndex].length) {
            typingText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (!typingText) return;
        
        if (charIndex > 0) {
            typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
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