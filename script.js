//countdown:--------
theTime = document.querySelector(".countdown");

let arr = [0,1,2,3,4]

function countDown () {
  theTime.innerText = arr.pop();
}


  let timer = setInterval(() => {
    if (arr.length) {
      countDown();
    }
    // console.log(arr);
    else {
      clearInterval(timer)
      // console.log(arr);
    }
  }, 1000)

  console.log(arr);


// //jack:--------
theNodes = document.querySelector(".jack-hiding");

function changeImg(node) {
  node.classList.remove("jack-hiding")
  node.classList.add("jack-seen")
}

setTimeout(() => {
  changeImg(theNodes);
},5000)
