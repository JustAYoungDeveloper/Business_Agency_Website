'use strict';

// Adding event listener on multiple events

const addEventOnElements = function (elements, eventType, callback) {
  for (let i=0, len = elements.length; i < len; i++){
    elements[i].addEventListener(eventType, callback);
  }
}

// Navbar toggle for mobiles
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);


// Header, Active header when window scroll down to 100px
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Sliders
const sliders = document.querySelectorAll("[data-slider]");
const initSlider = function(currentSlider) {
  const sliderContainer = currentSlider.querySelector("[data-slider-container]")
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]")
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]")

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = 
    `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

// Next Slider Function

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem()
  }
  sliderNextBtn.addEventListener("click", slideNext)
// Previous Slider Function

  const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem()
  }
  sliderPrevBtn.addEventListener("click", slidePrev)

  const dontHaveExtraItem = sliderContainer.childElementCount <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none"
  }
}

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i])
}




// Accordian section

const accordians = document.querySelectorAll("[data-accordion]");

let lastActiveAccordian = accordians[0];

const initAccordian = function (currentAccordian) {
  const accoridanBtn = currentAccordian.querySelector('[data-accordian-btn]')

  const expandAccordian = function () {
    if (lastActiveAccordian && lastActiveAccordian !== currentAccordian ) {
      lastActiveAccordian.classList.remove('expanded')
    }

    currentAccordian.classList.toggle("expanded");
  
    lastActiveAccordian = currentAccordian;
  }

  accoridanBtn.addEventListener("click", expandAccordian)
}

for (let i = 0, len = accordians.length; i < len; i++) {
  initAccordian(accordians[i])
}