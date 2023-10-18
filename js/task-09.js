function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

// Додається слухач події на кнопку і створюється функція-обробник для кліку на кнопку

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
