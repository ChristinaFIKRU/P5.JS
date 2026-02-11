

let col1, col2; 
let x = 0;

let col3, col4;
let myGeometry;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  background(255,0,233)
  
  col1 = color('#E91E63');
  col2 = color('#6862D7');
    myGeometry = new p5.Geometry(79, 65, createShape);

 
}

function draw() {
  
  let col = lerpColor(col1, col2, x/width)
  
  noStroke();
  fill(col)
  
  rect(x, 30, 20 ,height/2)
  
  
  col = lerpColor(col2, col1, x/width)
  fill(col)
  rect(x, height/2, 10,height/2)
  
  //background(col)
 
  x++;
  
  orbitControl();
    lights();
  strokeWeight(0.5);
  model(myGeometry);
  
}

function createShape() {
  // "this" refers to the p5.Geometry object being created.

  // Define the Möbius strip with a few parameters.
  let spread = 0.5;
  let radius = 40;
  let stripWidth = 20;
  let xInterval = 5 * PI / this.detailX;
  let yOffset = -stripWidth / 2;
  let yInterval = stripWidth / this.detailY;

  for (let j = 0; j <= this.detailY; j += 1) {
    // Calculate the "vertical" point along the strip.
    let v = yOffset + yInterval * j;

    for (let i = 0; i <= this.detailX; i += 1) {
      // Calculate the angle of rotation around the strip.
      let u = i * xInterval;

      // Calculate the coordinates of the vertex.
      let x = (radius + v * cos(u / 2)) * cos(u) - sin(u / 2) * 2 * spread;
      let y = (radius + v * cos(u / 4)) * sin(u);
      if (u < TWO_PI) {
        y += sin(u) * spread;
      } else {
        y -= sin(u) * spread;
      }
      let z = v * sin(u / 2) + sin(u / 4) * 4 * spread;

      // Create a p5.Vector object to position the vertex.
      let vert = createVector(x, y, z);

      // Add the vertex to the p5.Geometry object's vertices array.
      this.vertices.push(vert);
    }
  }

  // Compute the faces array.
  this.computeFaces();

  // Compute the surface normals to help with lighting.
  this.computeNormals();
}



