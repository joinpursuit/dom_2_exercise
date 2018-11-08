const timer = document.querySelector(".countdown");

const timerCountdown = num => {
  const countD = setInterval(function() {
    timer.innerText = num;
    if (num > 0) {
      countD;
    } else {
      clearInterval(countD);
    }
    num--;
  }, 1000);
};
timerCountdown(5);

// const timerCountdown = num => {
//   const countD = setInterval(function() {
//     num--;
//     timer.innerText = num;
//     if (num >= 0) {
//       countD;
//     } else {
//       clearInterval(countD);
//     }
//   }, 1000);
// };
// timerCountdown(5);
//
// const jackCountdown = num => {
//   const jackCountD = setInterval(function() {
//     num--;
//     timer.innerText = num;
//     if (num >= 0) {
//       countD;
//     } else {
//       clearInterval(countD);
//       document.
//     }
//   }, 1000);
// };
//
// const timer = document.querySelector(".countdown");
// const countdown = num => {
//   const countD = setInterval(function() {
//     timer.innerText = num;
//     if (num > 0) {
//       countD;
//     } else {
//       clearInterval(countD);
//     }
//     num--;
//   }, 1000);
// };
// countdown(5);
