const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText.trim();

    if (value === 'C') {
      currentInput = '';
      screen.innerText = '';
    } else if (value === '←') {
      currentInput = currentInput.slice(0, -1);
      screen.innerText = currentInput;
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
        screen.innerText = currentInput;
        resetNext = true;
      } catch (e) {
        screen.innerText = 'Error';
        currentInput = '';
      }
    } else {
      if (resetNext) {
        currentInput = '';
        resetNext = false;
      }
      currentInput += value;
      screen.innerText = currentInput;
    }
  });
});