//var counter =


let num = 4;
let interval = setInterval(function() {

  let countDown = document.querySelector('.countdown');

  countDown.innerHTML = num
  num--;
    // Display 'counter' wherever you want to display it.
    if (num === -1) {
        let classChange = document.querySelector(".jack-hiding")
        classChange.classList.remove("jack-hiding")
        classChange.classList.add("jack-revealed")
        clearInterval(interval);
    }
}, 1000);
