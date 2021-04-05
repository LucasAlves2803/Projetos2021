let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderwidth = document.querySelector(".slider").clientWidth;

document.querySelector('.slide--width').style.width = `${sliderwidth *  totalSlides}px`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
document.querySelector('.slider--controls').style.width = `${sliderwidth}px`;

function goPrev(){
    currentSlide--;
    if (currentSlide <0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if (currentSlide > (totalSlides -1)){
        currentSlide = 0;
    }
    updateMargin();
}


function updateMargin(){
    let slider_item_Width = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * slider_item_Width);
    document.querySelector('.slide--width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext,5000);