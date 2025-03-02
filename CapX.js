function openVideo(element) {
    const videoSrc = element.querySelector('video').src;
    const popup = document.getElementById('video-popup');
    const popupVideo = popup.querySelector('video');

    popupVideo.src = videoSrc;
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeVideo() {
    const popup = document.getElementById('video-popup');
    const popupVideo = popup.querySelector('video');

    popupVideo.pause();
    popupVideo.src = '';
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}
