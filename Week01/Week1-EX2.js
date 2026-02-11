
let img;


function preload() {
  img = loadImage('Screenshot 2026-02-01 154332.png');
}

function setup() {
  createCanvas(469,469);

  background(img);

  
  copy(img, 10, 33, 20, 30, // source pixels
       20, 30, //destination position
     60, 60); //destination size
  
  

  stroke(234,0,532);
  noFill();
  square(10, 33,10);

  describe(
    'An image of a light pole taken near NYU Bobst library.'
  );
}

