const Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;
const  Body = Matter.Body;
const  Constraint = Matter.Constraint;
const  Mouse = Matter.Mouse;
const  MouseConstraint = Matter.MouseConstraint;

var engine, world;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  
  canvas = createCanvas(800,800);
  
  engine = Engine.create(); 
  world = engine.world; 

  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  };

  constraint = MouseConstraint.create(engine, options);
  World.add(world, constraint);

  bob1 = new Pendulum(300, 350, "yellow");
  bob2 = new Pendulum(350, 350, "red");
  bob3 = new Pendulum(400, 350, "blue");
  bob4 = new Pendulum(450, 350, "pink");
  bob5 = new Pendulum(500, 350, "purple");

  rope1 = new Sling(bob1.body, {x: 300, y: 200});
  rope2 = new Sling(bob2.body, {x: 350, y: 200});
  rope3 = new Sling(bob3.body, {x: 400, y: 200});
  rope4 = new Sling(bob4.body, {x: 450, y: 200});
  rope5 = new Sling(bob5.body, {x: 500, y: 200});

}

function draw() {
  
  background("black");  

 
  Engine.update(engine); //Update to physics engine
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged() {
  Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}