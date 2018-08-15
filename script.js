const _ = require('lodash'); // with lodash the syntax isn't import but require.....
let array = [1,2,3,4,5,6,7,8];
console.log('answer: ',_.without(array, 3));

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient(){
  body.style.background = "linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);/* We don't put the bracket because when the html files is reading the
is read ans it was definitively, so if any bracket is put with the function I can change the gradien*/

color2.addEventListener("input", setGradient);
