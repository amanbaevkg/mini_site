"use strict"
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((p) => {
    p.style.background = '#ff0000';
});

let elementsList = document.getElementById('optionsList');
console.log(elementsList);
let kids = elementsList.childNodes;
console.log(kids);
let parents = elementsList.parentNode;
console.log(parents);

let parTest  = document.getElementById('testParagraph');
parTest.innerHTML = "Это абзац";

let navItem = document.querySelectorAll('main-header *');
console.log(navItem);
navItem.forEach((child) => {
    console.log(child);
    child.classList.add('nav-item');
});

let removeClass = document.querySelectorAll('.section-title *');
removeClass.forEach((children) => {
    children.classList.remove('section-title');
});
