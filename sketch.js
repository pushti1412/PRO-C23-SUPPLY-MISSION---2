var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-45, width,10);
	//groundSprite.shapeColor=color(0)

	side1 = createSprite(width/2,height-45,200,20);
	side1.shapeColor = color(255,0,0)

	side2 = createSprite(width/2-90,height-90,20,100);
	side2.shapeColor = color(255,0,0)

	side3 = createSprite(width/2+90,height-90,20,100);
	side3.shapeColor = color(255,0,0)

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground = Bodies.rectangle(width/2, height-63, 200, 20 , {isStatic:true} );
 	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
	 //packageSprite.setScale = 2;

	 
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



