const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var plinko,particals,division

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  // var particals =[];
   var plinko = [];
   var division =[];
    
  ground = new Ground(200,780,800,10)
 /*
 for (var k = 0; k<= width; k=k+80){
   division.push(new Divisions(k, height=divisionHeight/2,10,divisionHeight));
 }
*/
for (var j=40; j<= width; j=j+50)
{
  plinko.push(new Plinko(j,75,20));
}
for (var j=15; j<= plinko.length; j++)
{
  plinko.push(new Plinko(j,175,20))
}
}



var divisionHeight = 300;


function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  for (var j=0; j<=length; j=j++){
plinko[j].display();
  }
 
}