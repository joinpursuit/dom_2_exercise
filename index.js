let count = document.querySelector(".countdown")
let jack = document.querySelector(".jack-hiding")
console.log(count);


const countDown = () => {
  let num = Number(count.innerText)
  console.log(num);

 let timer = setInterval(() => {
   count.innerText = `${num}`;
   num--;
   console.log(num);
   if (num === 0) {
     clearInterval(timer);
     jack.classList.remove("jack-hiding");
     console.log(jack);
     jack.classList.add("jack-revealed")

   }
 }, 1000);
};

countDown();
