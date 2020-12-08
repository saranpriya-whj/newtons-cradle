
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Ground(width/2,100,width/2,40);

bob1 = new Bob(100,300)
bob2 = new Bob(130,300)
bob3 = new Bob(160,300)
bob4 = new Bob(190,300)
bob5 = new Bob(220,300)

launcher1 = new Launcher (bob1.body,roof.body,-120,0);
launcher2 = new Launcher (bob2.body,roof.body,-60,0);	
launcher3 = new Launcher (bob3.body,roof.body,0,0);
launcher4 = new Launcher (bob4.body,roof.body,60,0);
launcher5 = new Launcher (bob5.body,roof.body,120,0);

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  
  drawSprites();
 bob1.display();
 bob2.display();
bob3.display();
bob4.display();
bob5.display();
 
launcher1.display();
launcher2.display();
launcher3.display();
launcher4.display();
launcher5.display();

roof.display();



}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})


}

}

