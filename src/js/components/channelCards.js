// Dados dos canais
const channelsData = [
    {
        id: 'filipe-deschamps',
        name: "Filipe Deschamps",
        avatar: "https://embed.filekitcdn.com/e/iajLrvtJnG9GL5FWs5H8a1/6M4He65n8bpXQJNcxeLXLL",
        subscribers: "+1M",
        description: {
            'pt': "Vídeos sobre tecnologia, programação e empreendedorismo digital com um toque de humor e autenticidade.",
            'en': "Videos about technology, programming and digital entrepreneurship with a touch of humor and authenticity."
        },
        videoId: "ZtMzB5CoekE"
    },
    {
        id: 'curso-em-video',
        name: "Curso em Vídeo",
        avatar: "https://yt3.ggpht.com/a/AATXAJxPC_D40WpkAx7kkduf4csBFe0tqY5SpoGs8w=s900-c-k-c0xffffffff-no-rj-mo",
        subscribers: "+3M",
        description: {
            'pt': "O Curso em Vídeo é um projeto criado pelo Professor Gustavo Guanabara que disponibiliza cursos de tecnologia gratuitos e de qualidade para todo mundo.",
            'en': "Curso em Vídeo is a project created by Professor Gustavo Guanabara that provides free and quality technology courses for everyone."
        },
        videoId: "S9uPNppGsGo"
    }
];

// Função para criar o HTML de um card
function createChannelCard(channel, index) {
    const currentLang = localStorage.getItem('language') || 'pt';
    
    // Pega as mensagens pessoais do canal das traduções
    const messages = channelsTranslations[currentLang]['channel-messages'][channel.id];
    
    return `
        <div class="channel-card">
            <div class="channel-info">
                <img src="${channel.avatar}" alt="${channel.name}" class="channel-avatar">
                <div class="channel-text">
                    <h3>${channel.name}</h3>
                    <p class="subscribers">${channel.subscribers} ${channelsTranslations[currentLang]['subscribers']}</p>
                    <p class="description">${channel.description[currentLang]}</p>
                </div>
            </div>
            <div class="featured-video">
                <h4>${channelsTranslations[currentLang]['featured-video']}</h4>
                <div class="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/${channel.videoId}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div class="personal-message">
                <p>${messages['message-1']}</p>
                <p>${messages['message-2']}</p>
            </div>
        </div>
    `;
}

// Função para renderizar todos os cards
function renderChannelCards() {
    const channelsGrid = document.querySelector('.channels-grid');
    if (!channelsGrid) return;

    const cardsHTML = channelsData
        .map((channel, index) => createChannelCard(channel, index))
        .join('');
    
    channelsGrid.innerHTML = cardsHTML;
}

// Renderizar cards quando a página carregar
document.addEventListener('DOMContentLoaded', renderChannelCards);