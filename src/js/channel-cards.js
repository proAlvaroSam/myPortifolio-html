// Dados dos canais
const channelsData = [
    {
        name: "Filipe Deschamps",
        avatar: "https://embed.filekitcdn.com/e/iajLrvtJnG9GL5FWs5H8a1/6M4He65n8bpXQJNcxeLXLL",
        subscribers: "+1M",
        description: {
            'pt-BR': "Vídeos sobre tecnologia, programação e empreendedorismo digital com um toque de humor e autenticidade.",
            'en': "Videos about technology, programming and digital entrepreneurship with a touch of humor and authenticity."
        },
        videoId: "ZtMzB5CoekE"
    },
    // Exemplo de como adicionar mais canais
    /*
    {
        name: "Outro Canal",
        avatar: "url-da-imagem",
        subscribers: "X inscritos",
        description: "Descrição do canal",
        videoId: "id-do-video"
    }
    */
];

// Função para criar o HTML de um card
function createChannelCard(channel, index) {
    const position = index % 2 === 0 ? 'card-left' : 'card-right';
    const currentLang = document.documentElement.lang || 'pt-BR';
    
    return `
        <div class="channel-card ${position}">
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