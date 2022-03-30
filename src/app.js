/* eslint-disable */
import "bootstrap";
import "./style.css";

let iconos = ["♥", "♠", "♣", "♦"];
let rCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function cartasGenerator(arr1, arr2) {
  //CARTAS

  let carta = document.getElementById("num");
  let nroTarj = Math.floor(Math.random() * rCard.length);
  let num = rCard[nroTarj];
  let numero = (carta.innerHTML = num);

  //ICONOS

  let iconPaloS = document.querySelector(".icoSuperior");
  let iconPaloI = document.querySelector(".icoInferior");

  let palo = Math.floor(Math.random() * iconos.length);
  let ico = iconos[palo];
  let figura1 = (iconPaloS.innerHTML = ico);
  let figura2 = (iconPaloI.innerHTML = ico);

  // COLOR
  for (let i of ico) {
    if (i == "♥" || i == "♦") {
      iconPaloI.style.color = "red";
      iconPaloS.style.color = "red";
      carta.style.color = "red";
    } else {
      iconPaloI.style.color = "black";
      iconPaloS.style.color = "black";
      carta.style.color = "black";
    }
  }
}

window.onload = function() {
  document.getElementById("btn").addEventListener("click", () => {
    cartasGenerator();
  });
};
