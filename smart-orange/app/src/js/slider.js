'use strict';

//declare
const slides = document.querySelectorAll('.slider__item'),
    arrowLeft = document.getElementById('slider-left'),
    arrowRight = document.getElementById('slider-right'),
    projectName = document.getElementById('project-name'),
    slideNumber = document.getElementById('slide-number'),
    slidesLength = document.getElementById('slides-length'),
    projectsNamesArr = ['HOME', 'OFFICE']; //array of projects names for slides
let slideIndex = 1;

//show slides
showSlide(slideIndex);

//show previous slide by clicking arrow left
arrowLeft.addEventListener('click', function () {
    showSlide(slideIndex -= 1);
});

//show next slide by clicking arrow right
arrowRight.addEventListener('click', function () {
    showSlide(slideIndex += 1);
});

function showSlide(i) {

    i < 1 ? slideIndex = slides.length : null;
    i > slides.length ? slideIndex = 1 : null;

    slides.forEach(
        it => it.style.display = 'none'
    )

    slides[slideIndex - 1].style.display = 'block';

    //show number of current slide
    slideIndex < 10 ? slideNumber.innerText = '0' + slideIndex : slideNumber.innerText = slideIndex;

    //show project name of current slide
    projectName.innerText = projectsNamesArr[slideIndex - 1];
}


//show quantity of slides
slideIndex < 10 ? slidesLength.innerText = '0' + slides.length : slidesLength.innerText = slides.length;