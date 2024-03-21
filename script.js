document.addEventListener('DOMContentLoaded', function() {
    const imageBoxes = document.querySelectorAll('.image-box');
    const largeImageView = document.getElementById('largeImageView');
    const largeImage = document.getElementById('largeImage');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    function updateLargeImage(index) {
        currentIndex = (index + imageBoxes.length) % imageBoxes.length;
        const imgSrc = imageBoxes[currentIndex].querySelector('img').src;
        largeImage.src = imgSrc;
    }

    function handleThumbnailClick(event) {
        currentIndex = Array.from(imageBoxes).indexOf(event.currentTarget);
        updateLargeImage(currentIndex);
   
        largeImageView.style.display = 'flex';
    }

    function closeBigImage(event) {
        largeImageView.style.display = 'none';
        largeImage.src = '';
    }

    function navigateImage(direction) {
        updateLargeImage(currentIndex + direction);
    }

    imageBoxes.forEach((box, index) => {
        box.addEventListener('click', handleThumbnailClick);
    });

    closeBtn.addEventListener('click', closeBigImage);

    prevBtn.addEventListener('click', (event) => {
        navigateImage(-1);
    });

    nextBtn.addEventListener('click', (event) => {
        navigateImage(1);
    });
});
