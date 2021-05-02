'use strict';

//declare
const projectItems = document.querySelectorAll('.project');

//show hidden name project
for (let j = 0; j < projectItems.length; j++) {
    projectItems[j].addEventListener('mouseover', function () {
        this.children[1].classList.add('show-project-name');
    });
    projectItems[j].addEventListener('mouseout', function () {
        this.children[1].classList.remove('show-project-name');
    })
}