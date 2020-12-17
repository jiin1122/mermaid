var m1=250;
var m2=10;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}


function draw() {
  background(0,3,42); //an RGB color for the canvas' background
  //circle
  noStroke();
  fill(255,255,127); // yellow color for 3px ellipse
  ellipse(random(width),random(height),3,3); // 
  
  fill(181,119,255); // purple color for 3px ellipse
  noStroke();
  ellipse(random(width),random(height),3,3);
  
  fill(40,255,222); // mint color for 3px ellipse
  noStroke();
  ellipse(random(width),random(height),3,3);
  
 
  
  
if (mouseIsPressed) {
    fill(181,119,255,m1); // purple color for 10px ellipse
  } else {
    fill(40,255,222,m1); // mint color for 10px ellipse
  }
    ellipse(mouseX,mouseY,m2,m2);
  
  
  
  if (mouseX < 125) {
   fill(40,255,222,50) // mint
    rect(0, 0, 125, 500);  // First rect
  }
  else if (mouseX < 250) {
    fill(181,119,255,50) // purple
    rect(125, 0, 125, 500); // Second rect
  }
  
  else if (mouseX < 375) {
    fill(255,255,127,50) // yellow
    rect(250, 0, 125, 500); // Third rect
  }
  
  else {
    fill(255,94,205,50) // pink
    rect(375, 0, 125, 500); // Fourth rect
  }
  
  
}

function mousePressed(){
  m1=m1-5;
  m2=m2+20;
}