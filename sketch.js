function setup() {
  createCanvas(600, 600);
  background("cyan");
}

function draw() {
  fill("black")
  stroke("white")
  strokeWeight(1)
  if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 30);
  }
}

