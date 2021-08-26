
function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
move = loadAnimation("images/move.png","images/move1.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
eat = loadAnimation("images/eat1.png","images/eat2.png")

}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

 edges = createEdgeSprites();
  
}

function draw() {
  background(bg);  

  text("Intructions",20,20);
  text("Up Arrow = Brushing",20,40);
  text("Down Arrow = gyming",20,60);
  text("left Arrow = eating",20,80);
  text("right Arrow = bathing",20,100);
  text("m key = moving",20,120);

  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    console.log("letter m");
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    //astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}