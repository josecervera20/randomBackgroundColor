// Arreglo de colores oscuros disponibles para el fondo
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// Devuelve un índice aleatorio del arreglo de colores
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// Referencias al DOM
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// Cambia el color de fondo y actualiza el texto con el código HEX
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// Asigna el evento click al botón
const btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor;
