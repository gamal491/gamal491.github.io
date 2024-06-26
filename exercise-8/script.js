function updateTime(){

let today = new Date();
let currentMonth = today.getMonth();
console.log(currentMonth);
let months= ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
console.log(months[currentMonth]);

let currentDate= today.getDate();
console.log(currentDate);

let currentYear= today.getFullYear();
console.log(currentYear); 

let date = document.getElementById("date");
date.innerHTML= months[currentMonth] + " " + currentDate + ", " + currentYear;

//-------------------
let currentHour= today.getHours();
console.log(currentHour); 

let currentMinute= today.getMinutes();
console.log(currentMinute);

let currentSecond= today.getSeconds();
console.log(currentSecond);

//adding a 0 before for seconds
if(currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }

//adding a 0 before for min
if(currentMinute < 10) {
  currentMinute = "0" + currentMinute;
}

//adding a 0 before for hour
if(currentHour < 10) {
  currentHour = "0" + currentHour;
}

//making it not military time, subtracting hour by 12
if(currentHour > 12) {
  currentHour = currentHour - 12;
}

let clock = document.getElementById("clock");
clock.innerHTML= currentHour + ":" + currentMinute + ":" + currentSecond;


//move sun to sunrise and sunset by hour
let sun = document.getElementById("sun");
let sunByHour 

if (currentHour <=11){
    sunByHour = map(currentHour, 0, 11, 0, 100);
}
    else if (currentHour >= 12){
    sunByHour = map(currentHour, 12, 23, 100, 0);
}
console.log(sunByHour);
sun.style.top = sunByHour + "vh";

//help here
let hoursToLightness = map(currentHour, 0, 23, 0, 100);
console.log(hoursToLightness);
console.log(currentHour);
// document.body.style.backgroundColor = `hsl(0, 0%, ${hoursToLightness}%)`;


let secondsToLightness = map(currentSecond, 0, 59, 0, 100);
sun.style.backgroundColor = `hsl(0, 0%, ${secondsToLightness}%)`;
}

//live update
setInterval(updateTime, 1000);

//mapping little sun to from one range to another, DON'T TOUCH
function map(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
}

