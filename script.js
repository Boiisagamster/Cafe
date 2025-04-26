// Select all images with class "coffee-image"
const coffeeImages = document.querySelectorAll(".coffee-image");

// Add hover effects to each coffee image
coffeeImages.forEach(function(image) {
  image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.05)";
    image.style.transition = "transform 0.3s ease";
    image.style.filter = "brightness(110%)";
  });

  image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)";
    image.style.filter = "brightness(100%)";
  });
});