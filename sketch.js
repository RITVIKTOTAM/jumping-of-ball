const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var log1Sprite,log2Sprite,log3Sprite,log4Sprite,paperObjectBody,log1,log2,log3,log4;


function setup() {
	var canvas = createCanvas(800,400);

  
    
    log1Sprite = createSprite(600,385,100,10);
    log2Sprite = createSprite(400,395,800,10);
    log3Sprite = createSprite(550,365,10,50);
    log4Sprite = createSprite(650,365,10,50);
   
    
	engine = Engine.create();
	world = engine.world;
  
  
  paperObjectBody = new Paper(200,295,20,20);

  log1 = Bodies.rectangle(600,385,100,10,{isStatic:true});
  World.add(world,log1);

	log2 = Bodies.rectangle(400,395,800,10,{isStatic:true});
  World.add(world,log2);

  log3 = Bodies.rectangle(550,365,100,10,{isStatic:true});
  World.add(world,log3);
   
  log4 = Bodies.rectangle(650,365,100,10,{isStatic:true});
  World.add(world,log4);
   
   Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
   
 
 ellipse(paperObjectBody.x,paperObjectBody.y,20);
 
 paperObjectBody.display();
 
 drawSprites();
}

function keyPressed(){
  if  (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObjectBody,paperObjectBody.position,{x:85,y:-85});
  }
 

}
