const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const nameInputHandler = (e)=> {
  const inputValue = e.target.value.trim();
  nameOutput.textContent = inputValue ? inputValue : 'Anonymous';
}

nameInput.addEventListener('input', nameInputHandler);