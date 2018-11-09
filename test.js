let counter = document.querySelector('.countdown');
let pic = document.querySelector('.jack-hiding');

const stopTimer = () => {
  let num = Number(counter.innerText);

  const time = setInterval(() => {
    num--;
    counter.innerText = `${num}`;
    if (num <= 0) {
      clearInterval(time);
      pic.classList.remove('jack-hiding');
      pic.classList.add('jack-revealed');
      counter.innerText = 5;
    }
  }, 1000);
  pic.classList.remove('jack-revealed');
  pic.classList.add('jack-hiding');
};
