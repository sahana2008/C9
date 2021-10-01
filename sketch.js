//global area...declarations of variables
var box;

function setup() {
  createCanvas(400, 400);
  //creation of sprites will be done here
box = createSprite(200,200,30,30)


}

function draw() {
  background(220);

  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+5;
  }

if((keyIsDown(LEFT_ARROW)))
{

  box.position.x=box.position.x-5;
}

if(keyIsDown(UP_ARROW))
{
 
  box.position.y=box.position.y-5;
}

if(keyIsDown(DOWN_ARROW))
{
  box.position.y=box.position.y+5;
}
drawSprites()
  
}