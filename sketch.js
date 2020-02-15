var mrect, frect;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(200, 200, 75, 75);
  frect = createSprite(600, 200, 50, 50);

  mrect.shapeColor = "green";
  frect.shapeColor = "green";
}

function draw() {
  background(0,255,255); 
  
  mrect.y = World.mouseY;
  mrect.x = World.mouseX;

  console.log(mrect.x-frect.x);

  if (mrect.x - frect.x < mrect.width/2 + frect.width/2 &&
    frect.x - mrect.x < mrect.width/2 + frect.width/2) {
mrect.shapeColor = "red";
frect.shapeColor = "red";
  }
  else {
    mrect.shapeColor = "green";
    frect.shapeColor = "green";
  }
  
  drawSprites();
}