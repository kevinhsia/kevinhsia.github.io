const menuToggle = document.getElementById('mobile-menu-toggle');
menuToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    e.target.innerHTML = 'Close';
  } else {
    e.target.innerHTML = 'Menu';
  }
}

(()=> {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  const pageBodyElement = document.getElementsByClassName('page-body')[0];
  if (bodyHeight < windowHeight && pageBodyElement) {
    const pageBodyElementHeight = pageBodyElement.clientHeight;
    const difference = windowHeight - bodyHeight;
    pageBodyElement.style.minHeight = `${pageBodyElementHeight + difference + 10}px`;
  }
})();

// Fancy, reusable slideshow
const fancySlideshow = document.getElementById('fancy-slideshow');
if (fancySlideshow && fancySlideshow.hasChildNodes()) {
  const imagesWrapper = document.createElement('div');
  const controlsWrapper = document.createElement('div');
  const prevArrow = document.createElement('div');
  const nextArrow = document.createElement('div');
  imagesWrapper.classList.add('fancy-slideshow__images-wrapper');
  controlsWrapper.classList.add('fancy-slideshow__controls-wrapper');
  prevArrow.classList.add('fancy-slideshow__prev-arrow');
  nextArrow.classList.add('fancy-slideshow__next-arrow');
  controlsWrapper.appendChild(prevArrow);
  controlsWrapper.appendChild(nextArrow);
  fancySlideshow.appendChild(imagesWrapper);
  fancySlideshow.appendChild(controlsWrapper);
  const childNodes = fancySlideshow.childNodes;
  let imagesArray = [];

  for (let i = 0; i < childNodes.length; i++) {
    const currentNode = childNodes[i];
    if (currentNode.nodeName === 'IMG') {
      imagesArray.push(currentNode.src);
      fancySlideshow.removeChild(currentNode);
    }
  }

  imagesWrapper.style.backgroundImage = `url(${imagesArray[0]})`;

  let currentImage = 0;
  const numberOfImages = imagesArray.length;

  prevArrow.addEventListener('click', ()=>{handleSlideshowArrow('prev')});
  nextArrow.addEventListener('click', ()=>{handleSlideshowArrow('next')});

  function handleSlideshowArrow(val) {
    if (val === 'prev') {
      if (currentImage > 0) {
        currentImage--;
      } else {
        currentImage = (numberOfImages - 1);
      }
    } else if (val === 'next') {
      if (currentImage < (numberOfImages - 1)) {
        currentImage++;
      } else {
        currentImage = 0;
      }
    }
    imagesWrapper.classList.add('fade-out');
    setTimeout(()=> {
      imagesWrapper.style.backgroundImage = `url(${imagesArray[currentImage]})`;
      imagesWrapper.classList.remove('fade-out');
    }, 250);
  }
}
