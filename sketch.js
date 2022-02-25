
var box;

function setup(){
  createCanvas(400,400);
  box=createSprite(205,128,60,60);
  box.shapeColor="green";

}


function draw() {
  background("yellow");
if(keyDown("right")){
  box.x=box.x+4;
  background("red");
}
if(keyDown("left")){
  box.x=box.x-4;
  background("purple");
}
drawSprites();
}
