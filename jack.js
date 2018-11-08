let count = document.querySelector(".countdown");
let changes = document.querySelector(".jack-hiding");

function counting(){
  count.innerText = count.innerText - 1
}

function changeImg(node){
  node.classList.add("change");
}
let x = window.setInterval(counting, 1000)

setTimeout(() =>{
  clearInterval(x)
  changeImg(changes);
}, 5000);
