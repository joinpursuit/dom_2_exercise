const timer = document.querySelector(".countdown");

const timerCountdown = num => {
  const countD = setInterval(function() {
    timer.innerText = num;
    if (num > 0) {
      countD;
    } else {
      clearInterval(countD);
      let jackHiding = document.getElementById("jack-hiding");
      jackHiding.classList.add(".jack-surpise");
    }
    num--;
  }, 1000);
};
timerCountdown(5);
