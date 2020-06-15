const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;


}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  ground = rect(0, 770, 480, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinko.push(new plinko(j, 75))
  }

  for (var j = 0; j <= width; j = j + 50){
    plinko.push(new plinko(j, 75))
  }

  

  for (var l = 15; l <= width - 10; l = l + 50){
    plinko.push(new plinko(l, 175))
  }

  for (var m = -10; m <= width - 10 - 10; m = m + 50){
    plinko.push(new plinko(m, 275))
  }

  for (var n = -15; n <= width - 10 - 10 - 10; n = n + 50){
    plinko.push(new plinko(n, 375))
  }


    drawSprites();
}