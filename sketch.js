const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paperObject1,log1,log2,log3,log4;


function setup() {
	var canvas = createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	paperObject1 = new Paper(200,295,20,20,PI/-6);
    log1 = new  Log(600,385,100,10);
    log2 = new Ground(400,395,800,10,PI/-2);
    log3 = new Log(550,365,10,50);
    log4 = new Log(650,365,10,50);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 

 
 paperObject1.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 drawSprites();
}
