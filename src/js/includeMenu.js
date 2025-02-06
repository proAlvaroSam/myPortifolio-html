document.addEventListener('DOMContentLoaded', function() {
    fetch('./src/components/menu.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
}); 