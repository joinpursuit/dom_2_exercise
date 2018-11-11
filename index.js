//set up the setinterval here for the two pictures
//you are going to use getElementsByClassName(all) thing to grab the elements needed
//
// let count = document.querySelector(".countdown")
// let jackHiding = document.querySelector(".jack-hiding");
// let jackJumping = document.querySelector(".jack-exposed");
//
//
// let jackExposed = (() => {
//   let seconds = 5;
//   if(seconds >= 0){
//     count.innerHTML = seconds;
//     seconds--;
//   }else{
//     clearInterval(jackExposed)
//     jackJumping.classList.add()
//   }
//
// },1000)

          let countdown = document.querySelector('.countdown');
            let image = document.querySelector('.jack-hiding');
  setInterval(() => {
    if(countdown.innerText > 0) {
      countdown.innerText-- //= countdown.innerText-1
    }else {
      clearInterval();
      image.classList.add("jack-exposed");
      };
    },1000);
