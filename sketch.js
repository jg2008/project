
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1
var  bobObject2
var  bobObject3
var  bobObject4
var  bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  constructor(body1, body2, offsetx, offsety)
{
this.offsetX=offsetx
this.offsety=offsety
var options={
bodyA: body1,
bodyB:body2,
pointB:{x:this.offsetx, y:this.offsety}
}

//console.log(options);
this.rope=Constraint.create(options)
World.add(world, this.rope)
}

rope1=new rope (bobObject1.body, roofObject.body, -bobDiameter*2, 0)
  drawSprites();
 
  display()
{
pointA=this.rope.bodyA. position;
var pointB=this.rope.bodyB.position;
var
strokeWeight(2);
var Anchor1x=pointA.X
var Anchor1Y=point..y
var Anchor 2X=pointB.x+this.offsetx
var Anchor2Y=pointB.y+this.offsety
line(Anchor1x, Anchor1Y, Anchor2x, Anchor2Y);|
}
}



