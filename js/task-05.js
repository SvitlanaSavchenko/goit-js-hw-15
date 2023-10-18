// Отримується посилання на елементи DOM

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додається слухач події input до інпуту

nameInput.addEventListener("input", () => {
  // Отримується поточне значення інпуту

  const inputValue = nameInput.value;

  // Перевіряється, чи інпут порожній

  if (inputValue.trim() === "") {
    // Якщо порожній, встановлюється рядок "Anonymous" в спан

    nameOutput.textContent = "Anonymous";
  } else {
    // Якщо не порожній, встановлюється вміст інпуту в спан

    nameOutput.textContent = inputValue;
  }
});
