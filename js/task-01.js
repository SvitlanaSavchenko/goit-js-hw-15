// Знаходиться елемент ul з id "categories" за допомогою document.querySelector("#categories") і зберігається у змінну categoriesList.

const categoriesList = document.querySelector("#categories");

// Виводиться в консоль кількість категорій, використовується властивість .children для отримання дочірніх елементів ul#categories та їх кількість.

console.log(`Number of categories: ${categoriesList.children.length}`);

// Знаходиться всі елементи li з класом "item" всередині елемента ul#categories. Використовується categoriesList.querySelectorAll(".item") і зберігається у псевдомасив categoryItems.

const categoryItems = categoriesList.querySelectorAll(".item");

// Використовується метод forEach, перебираються всі категорії

categoryItems.forEach((category) => {
  // Знаходиться заголовок категорії (тег <h2>) в поточній категорії за допомогою category.querySelector("h2").

  const categoryName = category.querySelector("h2").textContent;

  // Знаходяться всі елементи <li> всередині поточної категорії за допомогою category.querySelectorAll("li").

  const categoryItemsCount = category.querySelectorAll("li").length;

  // Виводиться в консоль текст загодовка та к-сть елементів

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
