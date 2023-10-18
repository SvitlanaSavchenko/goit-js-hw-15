// Отримується посилання на форму за допомогою document.querySelector

const form = document.querySelector(".login-form");

// Додається слухач подій на подію 'submit'.  Відправлення форми обробляється за допомогою функції-обробника, яка отримує об'єкт події event.

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Заборона сторінці перезавантажуватися при відправці форми

  //   Отримуються всі елементи форми за допомогою form.elements.

  const elements = form.elements;

  //   Створюється порожній об'єкт formData.

  const formData = {};

  //   Перебраються всі елементи форми і заповнюється об'єкт formData, де ім'я поля - це 'name', а значення поля - 'value'.

  for (const element of elements) {
    if (element.tagName === "INPUT") {
      formData[element.name] = element.value;
    }
  }
  // Перевірка чи всі поля заповнені
  if (formData.email && formData.password) {
    console.log(formData);
    form.reset(); // Очищення значення полів форми
  } else {
    alert("All fields must be filled!");
  }
});
