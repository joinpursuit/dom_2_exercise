let count = document.querySelector(".countdown")
let boxImg = document.querySelector(".jack-hiding")

let secs = 4;
let interval = setInterval(function() {
    count.innerText = secs;
    if (secs===0) {
      clearInterval(interval);
      boxImg.style["background-image"] = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`
    }
    secs--;
  }, 1000)



console.log(count.classList);
console.log(boxImg.style);
