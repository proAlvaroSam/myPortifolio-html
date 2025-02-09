// Constantes
const CHANNEL_DATA = {
    logo: 'https://embed.filekitcdn.com/e/iajLrvtJnG9GL5FWs5H8a1/6M4He65n8bpXQJNcxeLXLL',
    videoId: 'ZtMzB5CoekE'
};

function loadChannelContent() {
    // Carregar vídeo em destaque
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${CHANNEL_DATA.videoId}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
    }

    // Carregar imagem do canal
    const channelAvatar = document.querySelector('.channel-avatar');
    if (channelAvatar) {
        channelAvatar.src = CHANNEL_DATA.logo;
    }
}

// Carregar conteúdo quando a página estiver pronta
document.addEventListener('DOMContentLoaded', loadChannelContent); 