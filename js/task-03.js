const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Створюється розмітка для кожного зображення у масиві images та вставляю її в ul.gallery за одну операцію додавання. Зображення оточуються <li> елементами з класом "gallery-item", а самі зображення мають клас "gallery-image"

const galleryList = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    (image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
