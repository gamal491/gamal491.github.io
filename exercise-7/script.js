let myButton= document.getElementById("my-button");
let myText= document.getElementById("my-text");
let myImage= document.getElementById("image");
let myHint= document.getElementById("hint");
let myCaption= document.getElementById("caption");

console.log(myHint);

function generateLicensePlate(){
    console.log(myText.value);
    if (myText.value == 1960){ //adjust this!
        myImage.src= "1960--nyc.png";
        myCaption.innerHTML ="Embossed golden yellow serial on black plate; 'NY' and '60' at bottom right"
    
    } else if (myText.value == 1961){
        myImage.src= "1961-nyc.png";
        myCaption.innerHTML ="Embossed golden yellow serial on black plate; 'NY', and '61' at bottom right"

    } else if (myText.value >=1962 && myText.value <=1963){
        myImage.src= "1962-nyc.png";
        myCaption.innerHTML ="Embossed black serial on golden yellow plate; 'NY', '62' at bottom"

    } else if (myText.value >=1964 && myText.value <=1965){
        myImage.src= "1964-nyc.png";
        myCaption.innerHTML ="Embossed golden yellow serial on black plate with border line; 'NY', '64' at bottom"

    } else if (myText.value >=1966 && myText.value <=1972){ //don't touch
        myImage.src= "1960-nyc.png";
        myCaption.innerHTML ="Embossed orange serial on blue plate; 'NEW YORK' centered at bottom"
    
    } else if (myText.value >=1973 && myText.value <1980){ //don't touch
        myImage.src= "1970-nyc.png";
        myCaption.innerHTML ="Embossed dark blue serial on reflective orange plate; 'NEW YORK' centered at bottom"

    } else if (myText.value >=1980 && myText.value <1986){ //don't touch
        myImage.src= "1980-nyc.png";
        myCaption.innerHTML ="Embossed dark blue serial on reflective orange plate; 'NEW YORK' centered at bottom"

    } else if (myText.value >=1986 && myText.value <=2000){ //don't touch
        myImage.src= "1990-nyc.png";
        myCaption.innerHTML ="Liberty plate. Embossed dark blue serial on reflective white plate, with red stripes at top and bottom; red Statue of Liberty graphic screened in center; 'NEW YORK' in dark blue centered at top"

    } else if (myText.value >=2001 && myText.value <2010){ //don't touch
        myImage.src= "2000-nyc.png";
        myCaption.innerHTML ="Empire State plate. Embossed dark blue serial with state-shaped separator on reflective white plate with blue bars above and below; upper blue bar has the words 'NEW YORK' in white with dark blue outline, over a skyline of Niagara Falls, the Adirondack Mountains, and New York City"

    } else if (myText.value >=2010 && myText.value <=2020){ //don't touch
        myImage.src= "2010-nyc.png"
        myCaption.innerHTML ="Empire Gold plate. Embossed dark blue serial with state-shaped separator on golden yellow plate, with small blue bar at bottom with thin blue stripe above and curved larger blue bar at top with thin blue stripe below, with orange 'NEW YORK' curving to edges of top bar"

    } else if (myText.value >=2021 && myText.value <=2024){ //don't touch
        myImage.src= "nyc.png" 
        myCaption.innerHTML ="Excelsior plate. Dark blue serial with state-shaped separator on white plate; images of Niagara Falls and New York City skyline at bottom; 'NEW YORK' in dark blue centered at top with gold and blue stripes on each side"
   
    } else if (myText.value < 1960 || myText.value > 2024){
        myHint.style.display= "block";
        myCaption.style.display= "none";
    } else{
        myCaption.style.display= "block";
    }
    }

function inputText(){
    myHint.style.display= "none";
    // myImage.style.display= "none";
    console.log(onInput);
}
