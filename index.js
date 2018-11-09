let counting = document.querySelector(".countdown"); // getElementsByClassName
// //Have number in descendent order, inside of the class countdown...maybe with a loop...
// const descendent = () => {
//     for (let i = 5; i => 1; i--) {
//       let inner = counting.innerHTML; //push mutated & added new values, looking for another soluction... pop maybe...
//     }
//     return inner = i;
// };
// //Each second has to print out a number. Looking for a soluction:
// let timing = SetTimeOut(()=> {
//   countdown(counting[0])
// }, 5000);
//
// timing.forEach(sec => {
//   if(timing === 1000){
//   }
// });
let arr = [0, 1, 2, 3, 4, 5]; //Numbers to count in descending order.
function countDown(){
  counting.innerText = arr.pop(); //to release the numbers inside class countDown using innerText one by one.
};
let timer = setInterval(() => {
  if (arr.length) {
    countDown()
    // h3.innerText;
  } else {
    clearInterval(timer);
    // Time for jack come out of the Box.
    let Jack = document.querySelector(".jack-hiding").style.backgroundImage = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`
  }
}, 1000);

// document.getElementById("myImg").src
div.classList.add("jack-is-here"); // I was trying to make it clickable...
// jackIsHere.addEventListener("click", () => {
//   switch (jackIsHere.style.backgroundImage = url) {
//     case: url("http://toysforprefer.com/wp-content/uploads/2018/01/classic-jester-jack-in-the-box-toy-regarding-jack-in-the-box-toy-closed.gif");
//       jackIsHere.style.backgroundImage = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`
//       break;
//     case: url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif");
//       jackIsHere.style.backgroundImage = `url("http://toysforprefer.com/wp-content/uploads/2018/01/classic-jester-jack-in-the-box-toy-regarding-jack-in-the-box-toy-closed.gif")`
//       break;
//   }
// });
