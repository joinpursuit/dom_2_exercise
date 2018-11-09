//countdown:--------

// let arr = [0,1,2,3,4]
let arr = [0]

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
  console.log(node.style)
  console.log(node.style.display);
  console.log((node.style.display == "none"))
  node.style.display = (node.style.display == '') ? "inline" : 'none';
  console.log(node.style.display);

  flickerYay(theYay)
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
  theYay = document.getElementById("yaySpace");
  theYay2 =  document.getElementById("yaySpace2");
  // theBigYay = document.getElementById('yaySpace');

  changeImg(theNodes);
  changeMessage(theMessage)

  addCelebration(theYay)
  // addCelebration(theYay2)

  // flickerYay(theYay)
},1000)
