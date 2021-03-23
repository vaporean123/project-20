var cat ;
var catImg;
var bg;
var bgImg
var mouse;
var mouseImg;
var mouse2;
var cat2;
var cat3;
var mouse3;

 
function preload(){
    catImg = loadImage("cat1.png");
    bgImg = loadImage("garden.png");
    mouseImg  = loadImage("mouse1.png");
  mouse2 = loadAnimation("mouse2.png","mouse3.png");
  cat2 = loadAnimation("cat2.png","cat3.png");
  cat3 = loadImage("cat4.png");
  mouse3 = loadImage("mouse4.png");

}

function setup(){
   createCanvas(600,600);
    bg = createSprite(200,200);
    bg.addImage("bg",bgImg);
    
    cat = createSprite(490,500,10,10);
    cat.addImage("cat",catImg);
    cat.scale = 0.1;
  
    mouse = createSprite(80,500,10,10);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.1;
}

function draw(){
    

  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
  
  if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");
    cat.velocityX=-2;
  }
  
  if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.addImage("catHappy",cat3);
    cat.changeAnimation("catHappy");
    cat.velocityX=0;
    mouse.addImage("mouseHappy",mouse3);
    mouse.changeAnimation("mouseHappy");
    cat.x = 130;
    
    }
  
  
  
  
 
  
 
  
    drawSprites();
}