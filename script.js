// Script for the mission slider in the abour us page 
var sliderContent = document.querySelector('.slider-content');
var sliderItems = document.querySelectorAll('.slider-item');
var slideIndex = 0;

function slideNext() {
  slideIndex++;
  if (slideIndex >= sliderItems.length) {
    slideIndex = 0;
  }
  updateSlider();
}

function slidePrev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  sliderContent.style.transform = 'translateX(-' + slideIndex * 100 + '%)';
}


// Animation Trial

var sliderContent = document.querySelector('.slider-content');
var sliderItems = document.querySelectorAll('.slider-item');
var slideIndex = 0;
var slideInterval = 5000; // 5 seconds

function slideNext() {
  slideIndex++;
  if (slideIndex >= sliderItems.length) {
    slideIndex = 0;
  }
  updateSlider();
}

function slidePrev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  sliderContent.style.transform = 'translateX(-' + slideIndex * 100 + '%)';
}

function startSlideInterval() {
  setInterval(function() {
    slideNext();
  }, slideInterval);
}

// Start the slide interval
startSlideInterval();





// Script For the image gallery viewer in our services
var galleryImages = document.querySelectorAll('.gallery-image');
    var popupContainer = document.querySelector('.popup-container');
    var popupImage = document.querySelector('.popup-image');
    var closeButton = document.querySelector('.close-button');
    var previousButton = document.querySelector('.previous-button');
    var nextButton = document.querySelector('.next-button');
    var currentImageIndex = 0;

    galleryImages.forEach(function(image, index) {
      image.addEventListener('click', function() {
        var imageSrc = this.getAttribute('src');
        currentImageIndex = index;
        popupImage.setAttribute('src', imageSrc);
        popupContainer.classList.add('open');
      });
    });

    closeButton.addEventListener('click', function() {
      popupContainer.classList.remove('open');
    });

    previousButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      var imageSrc = galleryImages[currentImageIndex].getAttribute('src');
      popupImage.setAttribute('src', imageSrc);
    });

    nextButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      var imageSrc = galleryImages[currentImageIndex].getAttribute('src');
      popupImage.setAttribute('src', imageSrc);
    });