
const slides = document.querySelector('.slides');
const slideshow = new Slideshow(slides);


// Initialize the GSAP Observer plugin
Observer.create({
    type: 'wheel,touch,pointer',
    onDown: () => slideshow.prev(),
    onUp: () => slideshow.next(),
    // invert the mouse wheel delta
    wheelSpeed: -1,
    tolerance: 10
});

// Preload all images. Once all images are preloaded, remove the 'loading' class from the body.
// preloadImagesArticles('.slide__img').then(() => document.body.classList.remove('loading'));