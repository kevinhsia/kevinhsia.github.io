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

(function () {
  var windowHeight = window.innerHeight;
  var bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  var pageBodyElement = document.getElementsByClassName('page-body')[0];
  if (bodyHeight < windowHeight && pageBodyElement) {
    var pageBodyElementHeight = pageBodyElement.clientHeight;
    var difference = windowHeight - (bodyHeight - pageBodyElementHeight);
    pageBodyElement.style.minHeight = difference + 10 + 'px';
  }
})();

// Fancy, reusable slideshow
var fancySlideshow = document.getElementById('fancy-slideshow');
if (fancySlideshow && fancySlideshow.hasChildNodes()) {
  (function () {
    var handleTransitionEnd = function handleTransitionEnd() {
      imagesWrapper.removeEventListener('transitionend', handleTransitionEnd);
      imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
      imagesWrapper.classList.remove('fade-out');
    };

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
      imagesWrapper.addEventListener('transitionend', handleTransitionEnd);
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

// Toggle contact form
(function () {
  var toggleButton = document.getElementById('toggle-contact-form');
  var simpleform = document.getElementById('simpleform');
  if (toggleButton && simpleform) {
    (function () {
      var showContactForm = function showContactForm(e) {
        toggleButton.style.visibility = 'hidden';
        simpleform.classList.add('show');
        toggleButton.removeEventListener('click', showContactForm);
      };

      toggleButton.addEventListener('click', showContactForm);
    })();
  }
})();