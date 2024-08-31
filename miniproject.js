
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});
document.getElementById('play-pause').addEventListener('click', function() {
    const trackName = document.getElementById('track-name');
    if (this.textContent === '⏯') {
        this.textContent = '⏸';
        trackName.textContent = 'Playing...';
    } else {
        this.textContent = '⏯';
        trackName.textContent = 'Paused';
    }
});

