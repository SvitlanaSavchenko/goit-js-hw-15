const inputElement = document.getElementById("validation-input");
const correctLength = parseInt(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;

  if (inputValue.length === correctLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
