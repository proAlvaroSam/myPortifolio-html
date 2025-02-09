const channelsTranslations = {
    'pt': {
        'channels-title': 'Canais Recomendados',
        'channels-subtitle': 'Uma seleção especial de canais que me ajudaram na jornada dev',
        'featured-video': 'Vídeo em Destaque',
        'subscribers': 'inscritos',
        // Mensagens pessoais para cada canal
        'channel-messages': {
            'filipe-deschamps': {
                'message-1': 'Esse canal me ajudou bastante a me desenvolver como dev e também como pessoa, espero um dia ser igual a ele foi comigo.',
                'message-2': 'Ele me ensinou que antes de codar nós também precisamos ser devs, então ele vai estar aqui em destaque.'
            },
            'curso-em-video': {
                'message-1': 'Não poderia ficar sem falar dessa lenda da programação, o mestre guanabara, além do seu canal ser uma parte histórica na vida de todos os programadores, na minha não poderia ser diferente.',
                'message-2': 'Só tenho a agradecer por ter sido um pequeno gafanhoto.'
            }
        }
    },
    'en': {
        'channels-title': 'Recommended Channels',
        'channels-subtitle': 'A special selection of channels that helped me on my dev journey',
        'featured-video': 'Featured Video',
        'subscribers': 'subscribers',
        // Personal messages for each channel
        'channel-messages': {
            'filipe-deschamps': {
                'message-1': 'This channel helped me a lot to develop as a dev and also as a person, I hope one day to be like he was to me.',
                'message-2': 'He taught me that before coding we also need to be devs, so he will be featured here.'
            },
            'curso-em-video': {
                'message-1': "I couldn't go without mentioning this programming legend, master guanabara, besides his channel being a historic part in every programmer's life, mine couldn't be different.",
                'message-2': 'I can only thank him for being a little grasshopper.'
            }
        }
    }
};

function translateChannelsPage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (channelsTranslations[lang] && channelsTranslations[lang][key]) {
            element.textContent = channelsTranslations[lang][key];
        }
    });
    
    // Recarrega os cards quando o idioma mudar
    if (typeof renderChannelCards === 'function') {
        renderChannelCards();
    }
}

// Escuta mudanças de idioma do menu
document.addEventListener('languageChanged', (event) => {
    translateChannelsPage(event.detail);
});

// Traduz a página quando carregada
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    translateChannelsPage(currentLang);
});
