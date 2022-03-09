const image = document.querySelector("img");
const input = document.querySelector("input");

// Getting the input value

const getInputValue = (event) => {
  const inputValue = event.target.value;
  image.src = URL.createObjectURL(input.files[0]);
};
input.addEventListener("input", getInputValue);

// Preventing the default scrolling behavior
window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);

// Flipping the image
const flipImage = (event) => {
  if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    image.classList.toggle("flip-bottom");
  } else if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    image.classList.toggle("flip-right");
  }
};

document.addEventListener("keyup", flipImage);
