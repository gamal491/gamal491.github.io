let myButton= document.getElementById("my-button");
let myText= document.getElementById("my-text");
let myImage= document.getElementById("image");
let myCaption= document.getElementById("caption");

console.log(myCaption);

function generateLicensePlate(){
    console.log(myText.value);
    if (myText.value >=1960 && myText.value <1970){
        myImage.src= "1960-nyc.png";
    } else if (myText.value >=1970 && myText.value <1980){
        myImage.src= "1970-nyc.png";
    } else if (myText.value >=1980 && myText.value <1990){
        myImage.src= "1980-nyc.jpg";
    } else if (myText.value >=1990 && myText.value <2000){
        myImage.src= "1990-nyc.png";
    } else if (myText.value >=2000 && myText.value <2010){
        myImage.src= "2000-nyc.png";
    } else if (myText.value >=2010 && myText.value <=2024){
        myImage.src= "nyc.png"
    } else if (myText.value < 1960 || myText.value > 2024){
        myCaption.style.display= "block";
    }
    }

function inputText(){
    myCaption.style.display= "none";
    // myImage.style.display= "none";
    console.log(onInput);
}
