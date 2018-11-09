//Alex's:--------------------------

let counterObj = document.querySelector(".countdown");
let jack = document.querySelector(".jack-hiding");
let count = 5;
let jackMessage = document.querySelector(".jack-message")

function jackPop() {
  jack.classList += " jackPupup"
}

fucntion changeCount() {
  if (count > 0) {
    counterObj.innerHTML = count
    count--;
    setTimeout(() => {
      changeCount();
    }, 1000);
  }else {
    counterObj.innerHTML = count;
    jackPop();
    jackMessage.innerHTML = "Here he is! WOOOOOOO!";
  }
}

changeCount();
