


// let theNodes = document.querySelectorAll(".jack-message");
//
// function showJack(node) {
//   node.classList += (" .jack-color");
//   // node.classList.remove(".jack-hiding");
//
// }
//
// setTimeout(() => {
//   showJack(theNodes[0])
// }, 1000)

// let arr = [1, 2, 3, 4, 5];
//
// function countDown() {
//   console.log(arr.pop());
// }
//
// let timer = setInterval(() => {
//   if (arr.length) {
//     countDown();
//   } else {
//     clearInterval(timer);
//   }
// }, 1000);


let countdown = document.querySelector(".countdown");
let show = document.querySelector(".jack-hiding");
let jackOut = document.querySelector(".jack-message")
 let num = 4
  let interval = setInterval(function() {
    countdown.innerText = num;
    if (num === 0) {
      clearInterval(interval);
      show.classList.remove("jack-hiding");
      show.classList.add("jack-showing");
      jackOut.classList.remove("jack-message")
      jackOut.classList.add("creepy-text");
      jackOut.innerText = "HERE'S JACK!";
    }
    num--;
  }, 1000);
