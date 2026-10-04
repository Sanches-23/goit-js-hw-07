function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.body;
const changeBtn = document.querySelector('.change-color');
const spanElement = document.querySelector('span.color');

const colorChangeHendler = ()=> {
  const rdColor = getRandomHexColor();
  bodyElement.style.backgroundColor = rdColor;
  spanElement.textContent = rdColor;
}

changeBtn.addEventListener('click', colorChangeHendler);