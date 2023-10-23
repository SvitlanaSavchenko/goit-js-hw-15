document.addEventListener("DOMContentLoaded", () => {
  // Отримується посилання на елементи
  const fontSizeControl = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");

  // Встановлюється початковий розмір шрифту для тексту
  text.style.fontSize = fontSizeControl.value + "px";

  // Додається слухач подій на елемент input
  fontSizeControl.addEventListener("input", () => {
    // При зміні значення input, встановлюємо його значення як розмір шрифту (з "px") для елементу span
    text.style.fontSize = fontSizeControl.value + "px";
  });
});
