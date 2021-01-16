const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var ground ;
var mango1,mango2,mango3,mango4,mango5, mango6,mango7;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,570);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	tree = new Tree(900,350,30,300);

	ground = new Ground(600,630,2000,20);

	mango1 = new Mango(950,240,20);
	mango2 = new Mango(820,200,20);
	mango3 = new Mango(808,288,20);
	mango4 = new Mango(1200,250,20);
	mango5 = new Mango(770,200,20);
	mango6 = new Mango(657,203,20);
	mango7 = new Mango(889, 300, 20);
	
	stone = new Stone(150,550,15);

	boyChain = new Chain(stone.body,{x:150,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background("lightblue");

  tree.display();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();


  stone.display();

  boyChain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);


  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyChain.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		boyChain.attach(stone.body);
	}
}



