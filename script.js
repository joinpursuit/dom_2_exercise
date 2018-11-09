//countdown:--------

let arr = [0,1,2,3,4]

function countDown (node) {
  node.innerText = arr.pop();
}


  let timer = setInterval(() => {
    let theTime = document.querySelector(".countdown");

    if (arr.length) {
      countDown(theTime);
    }
    // console.log(arr);
    else {
      clearInterval(timer)
      // console.log(arr);
    }
  }, 1000)

  console.log(arr);


// //jack:--------
function changeImg(node) {
  node.classList.remove("jack-hiding")
  node.classList.add("jack-seen")
}
//-----------
function changeMessage(node) {
  node.innerHTML = "Here! Being silly :}"
}
//-----------

function addCelebration(node) {
  node.classList.remove("yay")
  node.classList.add("yayShow")
}


//-------------switch tenery ----
// ----Reed's youtube video------
// theBigYay = document.querySelector(".yayShow")
function resizeYay (node) {
  if (node.classList.contains("yayShow")) {
    console.log("i was called yayShow to bigYay");

    node.classList.remove("yayShow")
    node.classList.add("yayBig")
  } else {
    console.log("i was called bigYay to yayShow");

    node.classList.remove("yayBig")
    node.classList.add("yayShow")
  }
}





function flickerYay(node) {
  let timer = setInterval(() => {
    // console.log("i was called");
    resizeYay(node)
  }, 2000)
}

//------------

setTimeout(() => {
  theNodes = document.querySelector(".jack-hiding");
  theMessage = document.querySelector(".jack-message");
  theYay = document.querySelector(".yay");
  theYay2 =  document.querySelector(".yay2");
  theBigYay = document.getElementById('yaySpace');

  changeImg(theNodes);
  changeMessage(theMessage)
  addCelebration(theYay)
  addCelebration(theYay2)
  flickerYay(theBigYay)
},5000)
