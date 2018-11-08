let countdown = document.querySelector('.countdown');
let counter = 5;
const timer = setInterval(() => {
  if (counter <= 0) {
    clearInterval(timer);
    showJack();
  } else {
    counter--;
    countdown.innerText = counter;
  }
}, 1000);
const showJack = () => {
  let div = document.querySelector('div');
  div.classList.remove('jack-hiding');
  div.classList.add('jack-show');
};
