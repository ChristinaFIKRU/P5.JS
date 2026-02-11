let targetX =0;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // ellipse(0, height/2, 50);
  // ellipse(targetX, targetY,50);
  
   x = lerp(x,targetX,0.5);
     y = lerp(y,targetY,0.05);

  // lerp- depending on the num you put in
    // ellipse(x, y/2,100);

  
  
}

function mousePressed(){
  ellipse(x,y,100);
  targetX=mouseX;
    targetY=mouseY;

}