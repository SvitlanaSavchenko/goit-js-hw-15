function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створення елементів в колекції

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    size += 10;
  }
}

// Очищення колекції елементів

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";
}

// Виклик функції createBoxes

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = +document.querySelector("input").value;
  createBoxes(amount);
});

// Виклик функції destroyBoxes

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
