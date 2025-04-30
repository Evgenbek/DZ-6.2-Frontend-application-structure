buttonBlock = document.querySelector('.button');

sum = 0;

buttonBlock.addEventListener('click',  -> 
  sum += 1;
  buttonBlock.textContent = sum;
);