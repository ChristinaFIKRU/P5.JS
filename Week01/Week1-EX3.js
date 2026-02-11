
let img;
let isLit = false;


// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('Screenshot 2026-02-01 210027.png');
}

function setup() {
  createCanvas(600, 400, WEBGL);

  describe('A sphere floating above a landscape. The surface of the sphere reflects the landscape.');
}

function draw() {
  orbitControl();

  panorama(img);

  ambientLight(60);

  imageLight(img);

  specularMaterial(20);
  shininess(200);
  noStroke();

  sphere(20);
   if (isLit === true) {
    lights();
  }

function doubleClicked() {
  isLit = true;
}
}