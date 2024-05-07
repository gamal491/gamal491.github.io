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

let about= document.getElementsByClassName("aboutContainer");
console.log(about);

function showInfo(){
  aboutContainer.style.display="block";
}

}

setInterval(updateTime, 1000);

let ouncesContainer= document.getElementById("oz-container");
let timeContainer= document.getElementById("time-container");

console.log("timeContainer");
function showOunces() {
  timeContainer.style.display="none";
  ouncesContainer.style.display="block";
}







function map(value, low1, high1, low2, high2){
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

