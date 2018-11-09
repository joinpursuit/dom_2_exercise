let jackHiding = document.querySelector('.jack-hiding')
function changeimage(node) {node.classList ="jack";}
setTimeout(() => {changeimage(jackHiding)},5000);

let count = document.querySelector('.countdown')
setTimeout(() => {count.innerHTML = "4"},1000);
setTimeout(() => {count.innerHTML = "3"},2000);
setTimeout(() => {count.innerHTML = "2"},3000);
setTimeout(() => {count.innerHTML = "1"},4000);
setTimeout(() => {count.innerHTML = "0"},5000);

//I am currently having a hard time understanding how to invoke a function between the js and html
