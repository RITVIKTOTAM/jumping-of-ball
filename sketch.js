

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paperObjectBody,log1,log2,log3,log4,dustbinImage;

function preload(){

  dustbinImage = loadImage("dustbingreen.png")
 
}

function setup() {
	var canvas = createCanvas(800,400);

  
   
    
   
    
	engine = Engine.create();
	world = engine.world;
  
  
  paperObjectBody = new Paper(200,185,15);

  log1 = new Log(630,185,100,10);
  
	log2 = new Ground(400,395,800,10);
 
  log3 = new Log(580,165,10,80);
  
  log4 = new Log(680,165,10,80);
  
   
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  imageMode(CENTER);
  image (dustbinImage,630,330,100,100);
 

 
 paperObjectBody.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 
}

function keyPressed(){
  if  (keyDown(UP_ARROW)){
    Matter.Body.applyForce(paperObjectBody.body,paperObjectBody.body.position,{x:30,y:-30});
  }
}
