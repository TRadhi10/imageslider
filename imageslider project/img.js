document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentSlideIndex = 0;

  
  function showSlide(index) {
    
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  showSlide(currentSlideIndex);


  nextButton.addEventListener('click', function() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0; 
    }
    showSlide(currentSlideIndex);
  });

  
  prevButton.addEventListener('click', function() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1; 
    }
    showSlide(currentSlideIndex);
  });
});
