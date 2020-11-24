var tr1,tr2,tr3,ground,engine,world,ball1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(700, 500);
	engine = Engine.create();
	world = engine.world;

tr1=new box(500,375,30,100);
tr2=new box(600,375,30,100);
tr3=new box(550,420,100,20);
ground=new gr(350,450,800,40);
ball1= new ball(60,390,20);



  
}


function draw() {
  background(0);

  Engine.update(engine);
tr1.display();
ground.display();
tr2.display();
tr3.display();
ball1.display();
keypressed();
}
function keypressed(){

if(keyCode=== UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-2});


}
}

