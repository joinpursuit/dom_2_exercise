let countdown = document.querySelector('.countdown');

let image = document.querySelector('.jack-hiding');


let counter = 5;

let timer = setInterval(() => {
  if (counter >= 0) {
    countdown.innerHTML = counter;
    counter--;
  } else {
    clearInterval(timer);
    image.classList.add("jack-revealed");
  }
}, 1000);


// let timer = setInterval(() => {
//   countdown.innerHTML = counter;
//   counter--;
//   if(counter === 0) {
//     clearInterval(timer);
//     image.classList.add("jack-revealed");
//   }
// }, 1000);
