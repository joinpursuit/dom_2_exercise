const timer = document.querySelector(".countdown");
let jack = document.querySelector(".jack-hiding");

const timerCountdown = num => {
  const countD = setInterval(function() {
    timer.innerText = num;
    if (num > 0) {
      countD;
    } else {
      clearInterval(countD);
      console.log(jack);
      jack.classList.remove("jack-hiding");
      jack.classList.add("jack-surprise");
      console.log(jack.classList);
    }
    num--;
  }, 1000);
};
timerCountdown(5);
