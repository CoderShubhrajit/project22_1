const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterImage,packageImage,helicopterSprite,packageSprite,ground,groundSprite;
var myEngine,world;
var helicopter,medicine;

function preload(){
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup(){
	createCanvas(800,600);

	myEngine = Engine.create();
	world = myEngine.world;

	packageSprite = createSprite(400,160,30,30);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.16;

	helicopterSprite = createSprite(400,160,50,20);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.7;

	groundSprite = createSprite(400,570,800,7);
	groundSprite.shapeColor = "brown";

	rectMode(CENTER);
	helicopter = Bodies.rectangle(400,160,50,20,{isStatic: true});
	World.add(world,helicopter);

	medicine = Bodies.rectangle(400,160,30,30,{restitution: 1.0},{isStatic: true});
	World.add(world,medicine);

	ground = Bodies.rectangle(300,570,600,10,{isStatic: true});
	World.add(world,ground);
}

function draw(){
	background("lightblue");
	Engine.update(myEngine);

	packageSprite.x = medicine.position.x;
	packageSprite.y = medicine.position.y;

	dropper();
 
	drawSprites();
}

function dropper(){
	if (keyCode === DOWN_ARROW){
	  Matter.Bodies.setStatic(medicine,{isStatic:false});
	}
}