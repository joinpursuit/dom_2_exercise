let timer = document.querySelector(".countdown");

const countdown = num => {
  const countD = setInterval(function() {
    num--;
    timer.innerText = num;
  }, 1000);
  if (num >= 0) {
    countD;
  } else {
    clearInterval(countD);
  }
};
countdown(5);
