const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var ground;
var cannon
var angle;
var cannonball;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1360,650);

  engine = Engine.create();
  world = engine.world;
  angle = PI/4;
  tower = new Tower(150, 400, 220, 310);
  ground = new Ground(0, height-1, width*2, 5);
  cannon = new Cannon(180,160,50,200,angle);
  cannonball = new CannonBall(cannon.x , cannon.y);
  
  rectMode(CENTER); 
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width,height);
  Engine.update(engine);
    tower.display();
    ground.display();
    cannon.display();
    cannonball.display();

 
}
function keyReleased(){
if(keyCode == DOWN_ARROW){
  cannonball.shoot();
}

}
