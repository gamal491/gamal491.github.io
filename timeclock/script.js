function updateTime(){



let today = new Date();
let currentHour= today.getHours();
console.log(currentHour);

let timeOfDay= document.getElementById("timeofday");
console.log(timeOfDay);
if (currentHour > 11) {
  timeOfDay.innerHTML= "PM";}

else if (currentHour <= 11){
  timeOfDay.innerHTML= "AM";
}

let water = document.getElementById ("water");
console.log(water);

let waterFlow = map(currentHour, 0, 23, 0, 100);
console.log(waterFlow);

water.style.height= 100- waterFlow + "vh";

//done with waterflow


if(currentHour > 12) {
    currentHour = currentHour - 12;
  } 

let currentMinute= today.getMinutes();
console.log(currentMinute);

//adding a 0 before for min
if(currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

let currentSecond= today.getSeconds();
console.log(currentSecond);
if(currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }

// let waterFlow = map(currentSecond, 0, 59, 0, 128);
// console.log(waterFlow);
  
// water.style.height= 100- waterFlow + "vh";


let clock = document.getElementById ("clock");
function showTime(){
  clock.style.display= "block";
}
clock.innerHTML= currentHour + ":" + currentMinute;// + ":" + currentSecond;

}

setInterval(updateTime, 1000);
function map(value, low1, high1, low2, high2){
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
//----------------------------------------------

let about= document.getElementById("about");
console.log(about);

function showInfo(){
  about.style.display="block";
} 
showInfo();


let close= document.getElementById("close");
console.log(close);

function closeAbout(){
  about.style.display="none";
}
closeAbout();

//toggling between time and ounces

let ouncesContainer= document.getElementById("oz-container");
let timeContainer= document.getElementById("time-container");
console.log(ouncesContainer);
console.log(timeContainer);
let ouncesButton= document.getElementById("my-ounces")
let timeButton= document.getElementById("my-time")

function showOunces() {
  timeContainer.style.display="none";
  ouncesContainer.style.display="block";
  ouncesButton.style.display="none";
  timeButton.style.display="block";
  }

function showTime() {
  ouncesContainer.style.display="none";
  timeContainer.style.display="block";
  timeButton.style.display="none";
  ouncesButton.style.display="block";
  }
//done

//update fluid ounces
//------------------------------
function updateOunces(){

let today = new Date();
let currentHour= today.getHours();

let ounces= document.getElementById("ounces");
console.log(ounces);

function showOunces(){
  ounces.style.display="block";
}
// let wholeNumber= Math.floor(map(currentHour, 0, 23, 0, 128));
ounces.innerHTML= Math.floor(map(currentHour, 0, 23, 0, 128));
// Math.floor(Math.random()*128);

}

setInterval(updateOunces, 1000);



function map(value, low1, high1, low2, high2){
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}




