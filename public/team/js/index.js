// Array to hold the instantiated card objects.
let cardsArr = [];
console.log("teeeeeeeest");

// Query all non-empty card elements and for each card:
[...document.querySelectorAll(".card:not(.card--empty)")].forEach((cardEl) => {
  // Find the closest parent grid element of the card and get its data-effect attribute value.

  let gridEffect;
  try {
    gridEffect = cardEl.closest(".grid").getAttribute("data-effect");
  } catch (error) {
    // console.log(error);
  }

  // Depending on the data-effect value, instantiate the appropriate Card class.
  switch (gridEffect) {
    case "hover-1":
      cardsArr.push(new Card1(cardEl)); // For data-effect hover-1, use Card1
      break;

    default:
      console.warn("Unknown data-effect", gridEffect);
      break;
  }
});

// Preload all images
// Once all images are preloaded, remove the 'loading' class from the body.
preloadImagesTeams(".card__img").then(() =>
  document.body.classList.remove("loading")
);
