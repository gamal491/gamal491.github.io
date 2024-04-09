let licensePlates = document.querySelectorAll(".image");
let myButtons = document.getElementsByClassName("my-button");


console.log("hello world!");
console.log("heloo!");

function show1960() {
    for(licensePlate of licensePlates) {
      if (!licensePlate.classList.contains("1960")) {
       licensePlate.style.display = "none";
       } else {
      licensePlate.style.display = "block";
      }}

    for(myButton of myButtons) {
        myButton.style.backgroundColor= "yellow";
    }
}


function show1970() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("1970")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
    }

function show1980() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("1980")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
    }  

function show1990() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("1990")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
}

function show2000() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("2000")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
}

function show2010() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("2010")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
}

function show2020() {

    for(licensePlate of licensePlates) {
        if (!licensePlate.classList.contains("2020")) {
        licensePlate.style.display = "none";
        } else {
        licensePlate.style.display = "block";
        }
    }
    
}

function changeBackgroundColor(){

    for(myButton of myButtons) {
        myButton.style.backgroundColor= "yellow";
    }
}
