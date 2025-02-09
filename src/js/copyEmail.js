function copyEmail() {
    const email = 'pro.alvaro.sam@gmail.com';
    navigator.clipboard.writeText(email)
        .then(() => {
            const button = document.querySelector('.email-button');
            const originalText = button.textContent;
            button.textContent = 'Email Copied!';
            
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy email:', err);
        });
} 