const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var bobC, bob2C, bob3C, bob4C, bob5C;

var invisible, roof;

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//invisible = new Ground(600, 675, 1200, 25);
	roof= new Ground(600, 50, 600, 50);

	//Create the Bodies Here.
	bob  = new paper(450      , 675, 37.5);
	bob2 = new paper(600- 75  , 675, 37.5);
	bob3 = new paper(600      , 675, 37.5);
	bob4 = new paper(600 + 75 , 675, 37.5);
	bob5 = new paper(600 + 150, 675, 37.5);

	bobC = new SlingShot(bob.body, roof.body, -150, 0)
	bob2C = new SlingShot(bob2.body, roof.body, -75, 0)
	bob3C = new SlingShot(bob3.body, roof.body, 0, 0)
	bob4C = new SlingShot(bob4.body, roof.body, 75, 0)
	bob5C = new SlingShot(bob5.body, roof.body, 150, 0)


	Engine.run(engine);
	 
	

}



function draw() {
  background(225); 
 // invisible.display();
  roof.display();

 
  bobC.display();
  bob2C.display();
  bob3C.display();
  bob4C.display();
  bob5C.display();

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob.body,bob.body.position,{x:-105,y:-100});

	}
}


