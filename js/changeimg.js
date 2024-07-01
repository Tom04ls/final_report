document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.photos-slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 1;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 320}px)`; // 320pxは画像の幅+余白

        sliderItems.forEach((item, index) => {
            item.style.transform = index === currentIndex ? 'scale(1.2)' : 'scale(1)';
            item.style.opacity = index === currentIndex ? '1' : '0.5';
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sliderItems.length - 1;
        }
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < sliderItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    updateSlider();
});
