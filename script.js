document.querySelectorAll('.project-card').forEach(card => {
    const images = card.querySelectorAll('.carousel img');
    let currentIndex = 0;

    card.addEventListener('mouseenter', () => {
        images[currentIndex].classList.add('active');
        const interval = setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 5000);

        card.addEventListener('mouseleave', () => {
            clearInterval(interval);
            images[currentIndex].classList.remove('active');
            currentIndex = 0;
        });
    });
});
