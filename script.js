// Select the section you're observing
const section = document.querySelector(".header");

// Select the target elements to modify
const targetElement = document.querySelector(".navbar-custom");
const navElements = document.querySelectorAll(".nav-link-custom, .logo");

// Define the observer callback function
const callback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // Section is out of view
      targetElement.classList.add("new-class");

      // Add 'text-black' class to all targeted elements
      navElements.forEach((el) => {
        el.classList.add("text-black");
        el.classList.remove("text-white"); // Ensure white class is removed
      });
    } else {
      // Section is in view
      targetElement.classList.remove("new-class");

      // Remove 'text-black' and add 'text-white' to all elements
      navElements.forEach((el) => {
        el.classList.remove("text-black");
        el.classList.add("text-white");
      });
    }
  });
};

// // Create the observer
// const observer = new IntersectionObserver(callback);
// observer.observe(section);

// Create an Intersection Observer instance
const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.0,
});

// Start observing the section
if (section) {
  observer.observe(section);
}

// Initioalizing carrousels
const myCarouselElement = document.querySelector("#carouselExampleIndicators");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false,
});
