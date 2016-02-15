'use strict';

var menuToggle = document.getElementById('mobile-menu-toggle');
menuToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    e.target.innerHTML = 'Close';
  } else {
    e.target.innerHTML = 'Menu';
  }
}

// Fancy, reusable slideshow
var fancySlideshow = document.getElementById('fancy-slideshow');
if (fancySlideshow && fancySlideshow.hasChildNodes()) {
  (function () {
    var handleSlideshowArrow = function handleSlideshowArrow(val) {
      if (val === 'prev') {
        if (currentImage > 0) {
          currentImage--;
        } else {
          currentImage = numberOfImages - 1;
        }
      } else if (val === 'next') {
        if (currentImage < numberOfImages - 1) {
          currentImage++;
        } else {
          currentImage = 0;
        }
      }
      imagesWrapper.classList.add('fade-out');
      setTimeout(function () {
        imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
        imagesWrapper.classList.remove('fade-out');
      }, 250);
    };

    var imagesWrapper = document.createElement('div');
    var controlsWrapper = document.createElement('div');
    var prevArrow = document.createElement('div');
    var nextArrow = document.createElement('div');
    imagesWrapper.classList.add('fancy-slideshow__images-wrapper');
    controlsWrapper.classList.add('fancy-slideshow__controls-wrapper');
    prevArrow.classList.add('fancy-slideshow__prev-arrow');
    nextArrow.classList.add('fancy-slideshow__next-arrow');
    controlsWrapper.appendChild(prevArrow);
    controlsWrapper.appendChild(nextArrow);
    fancySlideshow.appendChild(imagesWrapper);
    fancySlideshow.appendChild(controlsWrapper);
    var childNodes = fancySlideshow.childNodes;
    var imagesArray = [];

    for (var i = 0; i < childNodes.length; i++) {
      var currentNode = childNodes[i];
      if (currentNode.nodeName === 'IMG') {
        imagesArray.push(currentNode.src);
        fancySlideshow.removeChild(currentNode);
      }
    }

    imagesWrapper.style.backgroundImage = 'url(' + imagesArray[0] + ')';

    var currentImage = 0;
    var numberOfImages = imagesArray.length;

    prevArrow.addEventListener('click', function () {
      handleSlideshowArrow('prev');
    });
    nextArrow.addEventListener('click', function () {
      handleSlideshowArrow('next');
    });
  })();
}