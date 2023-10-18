// За допомогою id отримується посилання на елементи input та span

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Додається слухач подій на елемент input для події "input".

fontSizeControl.addEventListener("input", () => {
  // Під час зміни значення input, це значення встановлюється, як розмір шрифту(додається "px" до нього) для елементу span

  text.style.fontSize = fontSizeControl.value + "px";
});
