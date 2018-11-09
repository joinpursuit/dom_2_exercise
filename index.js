// let count = document.querySelectorAll(".countdown");
// let theCount = "";
// for (let i = 5; i >= 0; i--) {
//   let theCount = `${i}`
// }
// count.innerHTML = theCount

let change = document.querySelector(".jack-hiding")

let time = setInterval(function() {
    change.classList.add("jack-pop");
  }, 5000)

// let seconds = document.querySelector(".countdown")
// let timer = setInterval(function() {
//     change.classList.add("jack-pop");
//   }, 5000)
