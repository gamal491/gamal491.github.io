function setup() {
    createCanvas(500, 500);
    rectMode(CENTER); //doesn't work?
    angleMode(DEGREES)

}

function draw() {
    background("purple");

//x-coor, y-coor, height, width
    rect(250, 250, 270, 450);
        // Rotate around the y-axis.
  rotateY(frameCount * 0.01);
    stroke("dashed","black"); //does it have to go in a specific order?
    fill("limegreen");


    
}