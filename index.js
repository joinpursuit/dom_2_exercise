let counter = document.querySelector(".countdown");
let jack = document.querySelector(".jack-hiding");

let num = Number(counter.innerText);

const myFunction = () => {
  let a = setInterval(() => {
    counter.innerHTML = `${num}`;
    num--;
    if(num === Math.floor(Math.random()*8)){
      clearInterval(a);
      jack.classList.remove("jack-hiding");
      jack.classList.add("jack-showing");
      num = 10;
    }
  }, 1000);
  jack.classList.remove("jack-showing");
  jack.classList.add("jack-hiding");
}








//
// function countdown(num){
//   for( let i = num; i > 0; i--){
//
//   }
// }
