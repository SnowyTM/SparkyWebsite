document.addEventListener('DOMContentLoaded', function () {
    // Background Music Control
    const bgmusic = document.getElementById('bgmusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseImg = document.getElementById('playPauseImg');
    
    // Event listener for play/pause button
    playPauseBtn.addEventListener('click', function () {
        if (bgmusic.paused) {
            bgmusic.play();
            playPauseImg.src = '/HTML-CSS-JAVASCRIPT/images/Pause.png'; // Change to pause image
        } else {
            bgmusic.pause();
            playPauseImg.src = '/HTML-CSS-JAVASCRIPT/images/Play.png'; // Change to play image
        }
    });

    // Set initial volume
    bgmusic.volume = 0.6; // Volume set to 10%

    // Pagination Active Link
    const links = document.querySelectorAll('.page-link');
    const currentPage = window.location.href;

    links.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add('active');
        }
    });
});
