const buttonBlock = document.querySelector('.button');

let sum = 0;

buttonBlock.addEventListener('click', () => {
  sum += 1;
  buttonBlock.textContent = sum;
});
