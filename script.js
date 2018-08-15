var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
  body.style.background = "linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);/* We don't put the bracket because when the html files is reading the
is read ans it was definitively, so if any bracket is put with the function I can change the gradien*/

color2.addEventListener("input", setGradient);
