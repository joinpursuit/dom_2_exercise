let arr = [1, 2, 3, 4, 5];

function countDown() {
  console.log(arr.pop());
}

let timer = setInterval(() => {
  if (arr.length) {
    countDown();
  } else {
    clearInterval(timer);
  }
}, 1000);
