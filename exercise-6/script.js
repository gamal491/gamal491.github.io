console.log("hey");

let myBox = document.getElementsByClassName("box");
console.log(myBox);

document.querySelectorAll(".box");
let boxes = document.querySelectorAll(".box");
console.log(document.querySelectorAll(".box")[0]);
console.log(document.querySelectorAll(".box")[2]);
console.log(boxes);

// boxes[0].style.backgroundColor= "blue";

// let randomNumber= Math.random()* 180;
let degree= ["1","2","3","4","5","6","7","8","9","10","179","178","177","176","175","174","173","172","171","170"]
console.log(degree.length);
let randomNumber= Math.floor(Math.random()* degree.length);
console.log(degree[randomNumber]);

boxes[0].style.transform= `rotate(${degree[randomNumber]}deg)`;
boxes[1].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[2].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[3].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[4].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[5].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[6].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[7].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[8].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[9].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[10].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[11].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[12].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[13].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[14].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[15].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;
boxes[16].style.transform= `rotate(${degree[Math.floor(Math.random()* degree.length)]}deg)`;

for (let box of boxes) {
    box.style.backgroundColor
}