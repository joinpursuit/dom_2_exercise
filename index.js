

let countdown = document.querySelector(".countdown")

let counter = 5

let stopInterval = setInterval(() =>{
  if (counter <= 1){

    let hereIsJack = document.querySelector(".jack-hiding")

    hereIsJack.classList.remove("jack-hiding")

    hereIsJack.classList.add("jack-hiding2")

    countdown.innerText = counter
    clearInterval(stopInterval)
  }else{
    countdown.innerText = counter
  }
  counter--
},1000)
