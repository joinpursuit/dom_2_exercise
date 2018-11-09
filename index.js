let change = document.querySelector(".jack-hiding")

let time = setInterval(function() {
    change.classList.add("jack-pop");
}, 5000)

let seconds = document.querySelector(".countdown")
let counter = 5
let timer = setInterval(function() {
  if (counter === 0){
    return counter;
  }
    counter--;
    seconds.innerText=counter;
}, 1000);

// let seconds = document.querySelector(".countdown")
// let counter = 5
// let timer = setInterval(function() {
//   if (counter === 0){
//     return counter && seconds.classList.add("jack-pop");
//   }
//     counter--;
//     seconds.innerText=counter;
// }, 1000);
