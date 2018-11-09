let change = document.querySelector(".jack-hiding")

let time = setInterval(function() {
    change.classList.add("jack-pop");
  }, 5000)

let seconds = document.querySelector(".countdown")
let counter = 5
let timer = setInterval(function() {
        counter--;
    seconds.innerText=counter;
}, 1000);
