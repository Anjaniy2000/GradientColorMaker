'use strict';

const title = document.querySelector('#title');
let colorA = document.querySelector('#color-a');
let colorB = document.querySelector('#color-b');
const generateCode = document.querySelector('#generate');
const generatedCode = document.querySelector('#generatedcode');
const copyText = document.querySelector('#copy');
const directions = document.querySelectorAll('.buttons button');
let currentDirection = 'To Right';

function setDirection(direction, _this) {
  for (let i = 0; i < directions.length; i++) {
    directions[i].classList.remove('active');
  }
  _this.classList.add('active');
  currentDirection = direction;
}

generateCode.addEventListener('click', () => {
  document.querySelector(
    'body'
  ).style.backgroundImage = `linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`;
  generatedCode.value = `backgroud-image: linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`;
});

copyText.addEventListener('click', () => {
  generatedCode.select();
  document.execCommand('copy');
  alert('Gradient Color Copied!');
});
