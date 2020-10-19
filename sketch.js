
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob (463,522)
	bobObject2 = new Bob (390,520)
	bobObject3 = new Bob (320,520)
	bobObject4 = new Bob (250,520)
	bobObject5 = new Bob (180,520)

	roof = new Roof(340,70,450,20)

	rope1= new Rope (bobObject5.body, roof.body, -140, 0)
	rope2= new Rope (bobObject4.body, roof.body, -70, 0)
	rope3= new Rope (bobObject3.body, roof.body, 0, 0)
	rope4= new Rope (bobObject2.body, roof.body, 70, 0)
	rope5= new Rope (bobObject1.body, roof.body, 140, 0)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:-130, y:-130})
	
	}

}	