const timer = document.querySelector(".countdown");
let jack = document.querySelector(".jack-hiding");

const timerCountdown = num => {
  const countD = setInterval(function() {
    timer.innerText = num;
    if (num > 0) {
      countD;
    } else {
      clearInterval(countD);
      jack.classList.remove("jack-hiding");
      jack.classList.add("jack-surprise");
    }
    num--;
  }, 1000);
};
timerCountdown(4);
