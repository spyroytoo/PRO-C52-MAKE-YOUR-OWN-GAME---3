const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var button,ball,ground,aim;
var score = 0;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  ground = new Ground(500,480,1000,20);
  ground2 = new Ground(10,250,20,500);
  ground3 = new Ground(990,250,20,500);
  ground4 = new Ground(500,20,1000,20);
  aim = new Aim(500,250,50,50)
  aim2 = new Aim(250,250,50,50)
  button = createImg('button.png');
  button.position(20,30);
  button.size(50,50);

  button.mouseClicked(fly);

  
  
  
}
function preload(){
  //aim_r = loadImage("Black_colour.jpg")
}

function draw() {
  background("pink");
  Engine.update(engine);

  ball.show();
  aim.show();
  aim2.show()
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();


 textSize(18);
  fill("red");
  text("Score" +score,50,225); 
  
  var collision = Matter.SAT.collides(ball.body, aim.body);
        if (collision.collided) {
          score = score +1
        }
        var collision = Matter.SAT.collides(ball.body, aim2.body);
        if (collision.collided) {
          score = score +2
        }

        if(score>=1){
          
          textSize(18);
          fill("white");
          text("YOU WIN",500,250);
        }
  

  drawSprites()
}
function fly(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}