"use strict";for(var projectItems=document.querySelectorAll(".project"),j=0;j<projectItems.length;j++)projectItems[j].addEventListener("mouseover",function(){this.children[1].classList.add("show-project-name")}),projectItems[j].addEventListener("mouseout",function(){this.children[1].classList.remove("show-project-name")});var slides=document.querySelectorAll(".slider__item"),arrowLeft=document.getElementById("slider-left"),arrowRight=document.getElementById("slider-right"),projectName=document.getElementById("project-name"),slideNumber=document.getElementById("slide-number"),slidesLength=document.getElementById("slides-length"),projectsNamesArr=["HOME","OFFICE"],slideIndex=1;function showSlide(e){e<1&&(slideIndex=slides.length),e>slides.length&&(slideIndex=1),slides.forEach(function(e){return e.style.display="none"}),slides[slideIndex-1].style.display="block",slideNumber.innerText=slideIndex<10?"0"+slideIndex:slideIndex,projectName.innerText=projectsNamesArr[slideIndex-1]}showSlide(slideIndex),arrowLeft.addEventListener("click",function(){showSlide(--slideIndex)}),arrowRight.addEventListener("click",function(){showSlide(slideIndex+=1)}),slidesLength.innerText=slideIndex<10?"0"+slides.length:slides.length;