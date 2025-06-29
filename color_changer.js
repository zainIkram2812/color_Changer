"use strict";

// setting the variables
const colorChangerbutton = document.querySelector(".change");
const boxOne = document.querySelector(".box1");
const boxTwo = document.querySelector(".box2");
const boxThree = document.querySelector(".box3");

// Making the function for generating the random colors

function randomColor() {
  let r = Math.floor(Math.random() * 255) + 0;
  let g = Math.floor(Math.random() * 255) + 0;
  let b = Math.floor(Math.random() * 255) + 0;
  let rgbColorCode = `rgb(${r},${g},${b})`;
  return rgbColorCode;
}

const hoverbackgroundColor = randomColor();
const hoverColor = randomColor();

// adding the event listner to the button

colorChangerbutton.addEventListener("click", () => {
  boxOne.style.backgroundColor = randomColor();
  boxTwo.style.backgroundColor = randomColor();
  boxThree.style.backgroundColor = randomColor();
  boxOne.style.color = randomColor();
  boxTwo.style.color = randomColor();
  boxThree.style.color = randomColor();
});
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
  .change:hover{
  background-color : ${hoverbackgroundColor};
  color :${hoverColor}; `;
  document.head.appendChild(style);
});
