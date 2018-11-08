// let theNodes = document.querySelectorAll(".myHeader")
//
// //console.log(theNode);
// theNodes.forEach(node=>{
//   node.innerText = "WHATTTT";
// })

// Always going to return an array like object.
//         ##################################
// let theNode = document.querySelector(".myHeader")
//
// console.log(theNode);

//Node is an object and has a property of innerText and we can key into it.
//
// let theNodes = document.querySelectorAll(".myHeader")
// console.log(theNodes);
// console.log(theNodes[0]);
// console.log(theNodes[0]["innerText"]);
// console.log(theNodes[0].innerHTML);

//        ##################################
// theNodes.forEach(node=>{
//   node.innerHTML = "<ol><li>huh?</li></ol>";
// })

//        ##################################
// let theNodes = document.querySelectorAll(".myHeader");
//
// let mySelect = document.querySelector(".myYears");
// let theHTML = "";
//
// for (let i = 1980; i <= 1990; i++) {
//   theHTML = theHTML.concat(`<option>${i}</option>`);
// }
// mySelect.innerHTML = theHTML;
//        ##################################
// let theNodes = document.querySelectorAll(".myHeader");
//   theNodes[1].style.fontSize = "50px";
//   theNodes[1].style.color = "maroon";
//   theNodes[0].style.fontSize = "60px";
//   theNodes[0].style.color = "grey";
// console.log(theNodes[0].classlist);
//        ##################################
let theNodes = document.querySelectorAll(".myHeader");
function adjustColor(node) {
  node.classList ="stuff";
}
setTimeout(() => {
  adjustColor(theNodes[0]);
},3000);
console.log(theNodes);
