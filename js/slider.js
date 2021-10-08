var index = 0;
var jumpWidth = 0;


const slider = document.querySelector(".slider-container");

const sliderItems = slider.querySelector(".slider-items").children;

const totalSlides = sliderItems.length;

const containerWidth = slider.offsetWidth;

const nextSlide = slider.querySelector(".next-slide");
const prevSlide = slider.querySelector(".prev-slide");

nextSlide.onclick = function() {
  next();
}

prevSlide.onclick = function() {
  prev();
}

setWidth();

function setWidth() {
  var totalWidth = 0;
    for(let i=0; i<sliderItems.length; i++) {
      sliderItems[i].style.width = containerWidth + "px";
      totalWidth = totalWidth + containerWidth;
    }
    slider.querySelector(".slider-items").style.width = totalWidth + "px";
}

function next() {
  if(index == totalSlides-1) {
    index = 0;
    jumpWidth = 0;
  }

  else {
    index++;
    jumpWidth = jumpWidth+containerWidth;
  }
  slider.querySelector(".slider-items").style.marginLeft = -jumpWidth + "px";
}

function prev() {
  if(index == 0) {
    index = totalSlides-1;
    jumpWidth = containerWidth*(totalSlides-1);
  }

  else {
    index--;
    jumpWidth = jumpWidth-containerWidth;
  }
  slider.querySelector(".slider-items").style.marginLeft = -jumpWidth + "px";
}