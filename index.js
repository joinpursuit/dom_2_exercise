let count = document.querySelectorAll(".countdown")

let changes = document.querySelector(".jack-hiding")

function changeImage (node){
  node.classList.add("changes")
}

function countDown() {
  count[0].innerText = count[0].innerText - 1
}


let down = window.setInterval(countDown, 1000)

setTimeout(() =>{
  clearInterval(down)
  changeImage(changes);
}, 5000)
