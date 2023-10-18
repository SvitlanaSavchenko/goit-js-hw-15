// Отримується доступ до інпута з id "validation-input" за допомогою document.getElementById.

const inputElement = document.getElementById("validation-input");

// Зміна correctLength задає кількість символів яка повинна бути в інпуті, це зазначено в його атрибуті data-length.

const correctLength = parseInt(inputElement.getAttribute("data-length"));

// Додається слухач події "blur" до інпута, який буде викликатися, коли інпут втрачає фокус.

inputElement.addEventListener("blur", () => {
  // За допомогою .value і .length в обробнику події "blur" отримується значення інпута та довжина символів

  const inputValue = inputElement.value;

  //  Порівнюється довжина з тією, яка задана в атрибуті data-length інпута. Додаються або видаляються класи "valid" або "invalid" для зміни стилю границі інпуту.  Перевірка та зміна стилю відбувається за допомогою методів .classList.add і .classList.remove.

  if (inputValue.length === correctLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
