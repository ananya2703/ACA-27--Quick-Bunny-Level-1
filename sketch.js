
var player
var target
var edges


function setup() {
  createCanvas(600,600);

  edges=createEdgeSprites();

  player=createSprite(40,550,20,20);
  target=createSprite(560,40,30,30);
  obs1=createSprite(100,200,100,15);
  obs1.velocityX=1;
  obs2=createSprite(240,200,100,15);
  obs2.velocityX=-1;
  obs3=createSprite(380,200,100,15);
  obs3.velocityX=1;
  obs4=createSprite(520,200,100,15);
  obs4.velocityX=-1;
  obs5=createSprite(60,250,100,15);
  obs5.velocityX=1;
  obs6=createSprite(210,250,100,15);
  obs6.velocityX=-1;
  obs7=createSprite(360,250,100,15);
  obs7.velocityX=1;
  obs8=createSprite(500,250,100,15);
  obs8.velocityX=-1;
  target.shapeColor= "pink"
  player.shapeColor= "white"
  obs1.shapeColor="red"
  obs3.shapeColor="red"
  obs2.shapeColor="red"
  obs4.shapeColor="red"
  obs5.shapeColor="red"
  obs6.shapeColor="red"
  obs7.shapeColor="red"
  obs8.shapeColor="red"
}

function draw() {
  background("green");  
  
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);

  if(keyDown("up")) {
    player.y=player.y-3;
  }
  if(keyDown("down")) {
    player.y=player.y+3;
  }
  if(keyDown("left")) {
    player.x=player.x-3;
  }
  if(keyDown("right")) {
    player.x=player.x+3
  }

  if(player.isTouching(target)) {
    text("YOU WIN" ,100,100);
  }
  if(player.isTouching(obs1)) {
    obs1.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs2)) {
    obs2.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs3)) {
    obs3.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs4)) {
    obs4.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs5)) {
    obs5.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs6)) {
    obs6.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs7)) {
    obs7.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs8)) {
    obs8.velocityX=0;
    text("YOU LOSE",100,100);
    player.x = 40;
    player.y = 550;
  }
  drawSprites();
}
