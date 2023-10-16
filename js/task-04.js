// Отримується посилання на елементи DOM
const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

// Ініціалізується поточне значення лічильника
let counterValue = 0;

// Функція для збільшення значення
const increment = () => {
  counterValue += 1;
  updateValue();
};

// Функція для зменшення значення
const decrement = () => {
  counterValue -= 1;
  updateValue();
};

// Функція для оновлення відображення значення
const updateValue = () => {
  valueSpan.textContent = counterValue;
};

// Додаються слухачі подій до кнопок
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
