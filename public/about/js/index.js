// Import necessary functions and classes

// Define a variable to store Lenis smooth scrolling object
let lenisAbout;

// Function to initialize Lenis for smooth scrolling
let initSmoothScrollingAbout = () => {
  // Instantiate the Lenis object with specified properties
  lenisAbout = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: true, // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenisAbout.on("scroll", () => ScrollTrigger.update());

  // Define a function to run at each animation frame
  let scrollFn = (time) => {
    lenisAbout.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};




// Start preloading fonts

// Once fonts are loaded, remove the 'loading' class from the body, ending the loading state
document.body.classList.remove("loading");
// Initialize smooth scrolling
initSmoothScrollingAbout();
// Select all elements with the class 'content-wrap', and for each, create a new instance of the Item class
[...document.querySelectorAll(".content-wrap")].forEach((element) => {
  new Item(element);
});
