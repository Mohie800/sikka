// Import the necessary function for preloading images

// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Element with class .columns
// const grid = document.querySelector('.columns');
// // All the columns class .column
// const columns = [...grid.querySelectorAll('.column')];
// // Map each column to its array of items and keep a reference of the image, its wrapper and the column
// const items = columns.map((column, pos) => {
//     return [...column.querySelectorAll('.column__item')].map(item => ({
//         element: item,
//         column: pos,
//         wrapper: item.querySelector('.column__item-imgwrap'),
// 		image: item.querySelector('.column__item-img')
//     }));
// });
// // All itemms
// const mergedItems = items.flat();

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.15, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};


// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages('.column__item-img').then(() => {
	initSmoothScrolling();
});