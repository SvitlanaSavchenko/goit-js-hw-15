const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Вибирається елемент ul#ingredients.. потім за допомогою методу map перетворюється масив ingredients в масив <li> елементів, додаючи текст та клас "item" для кожного інгредієнта.. використовується append для додавання всіх елементів <li> до списку ul#ingredients.

const ulIngredients = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ulIngredients.append(...ingredientElements);
