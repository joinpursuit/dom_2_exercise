

function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 5);

        seconds = seconds < 5 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveSeconds = 60 * 5,
        display = document.querySelector('.countdown');
    startTimer(fiveSeconds, display);
};


let someFunc = setInterval(() => {
  countdown.innerText = `${num}`; //what you want to do
  num--; //decrement the number (you have to set it somewhere)
  if(num === 0){ //ending condition
    clearInterval(someFunc); //this stops the setTimeInterval
  }
}, 1000);
