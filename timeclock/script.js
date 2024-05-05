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


if(currentHour > 12) {
    currentHour = currentHour - 12;
  } 

console.log("hello world!")

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

let clock = document.getElementById ("clock");
function showTime(){
  clock.style.display= "block";
}
clock.innerHTML= currentHour + ":" + currentMinute; //+ ":" + currentSecond;


}

setInterval(updateTime, 1000);

let about= document.getElementsByClassName("about");
console.log(about);

function showInfo(){
  about.style.display="flex";
}

showInfo();

function map(value, low1, high1, low2, high2){
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

