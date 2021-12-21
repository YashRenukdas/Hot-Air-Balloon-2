var player;
var city;
var bird1;
var bird2, bird3;
var gameOver;
var restart;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var obstacleGroup;
var score = 0;

function preload() {
    playerImg = loadImage("Balloon.png");
    cityImg = loadImage("background.jpg");
    bird1Img = loadImage("bird1.png");
    bird2Img = loadImage("bird2.png");
    bird3Img = loadImage("bird3.png");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
}

function setup() {
createCanvas(500,500);

city = createSprite(500,300);
//city.addImage(cityImg);
city.velocityX = -3

player = createSprite(200,150,10,10);
player.addImage("player", playerImg);
player.scale = 0.1;
player.velocityY = 0.3;

gameOver = createSprite(250,250);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.1;

restart = createSprite(250,240);
restart.addImage(restartImg);
restart.scale = 0.1;

gameOver.visible = false;
restart.visible = false;

obstacleGroup = createGroup();
score = 0;
  
}

function draw() {
  background(100)

  textSize(40);
  fill("black");
  text("Score: " +score, 100,100);

if(gameState === PLAY){

  city.velocityX = -3
  if(city.x < 0){
     city.x = city.width/8
  }
  
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+2
  }
  
  if(keyDown(LEFT_ARROW)){
      player.x = player.x-2
  }
  
  if(keyDown(UP_ARROW)){
      player.y = player.y-2
  }
  
  if(keyDown(DOWN_ARROW)){
      player.y = player.y+2
  }


  obstacles();

  if(obstacleGroup.isTouching(player)){
    gameState = END;
  }
}

else if(gameState === END){
player.velocityY = 0;
city.velocityX = 0;
obstacleGroup.setVelocityXEach(0);

gameOver.visible = true;
restart.visible = true;
}


city.depth = text.depth
text.depth = text.depth +1

  drawSprites();


}

function obstacles() {
  if(frameCount%60===0){
  bird = createSprite(400,200,10,10);
  bird.velocityX = -2;

  var rand = Math.round(random(1, 3))
  bird.y = Math.round(random(100,300))

  switch(rand){
    case 1: bird.addImage(bird1Img);
    break;

    case 2: bird.addImage(bird2Img);
    break;

    case 3: bird.addImage(bird3Img);
    break;
    default: break;
  }

  bird.scale = 0.1;
  bird.lifetime = 500;
  obstacleGroup.add(bird);
  }
}
