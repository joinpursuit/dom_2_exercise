let count = document.querySelector(".countdown");
let joker = document.querySelector(".jack-hiding");

function something(athing) {
  athing.classList = "jack";
}

setTimeout(() => {
  something(joker);
}, 5000);

// setTimeout(() => {
//   for (let i = count; i <= 0; i--) {
//     countdown.classList = [i];
//   }
// }, 0);

// let stopInterval = setInterval(counte, 1000);
//
// let count = 5;

let arr = ["POP!!!!", 1, 2, 3, 4];

function countDown() {
  count.innerHTML = arr.pop();
}

let timer = setInterval(() => {
  if (arr.length) {
    countDown();
  } else {
    clearInterval(timer);
  }
}, 1000);
