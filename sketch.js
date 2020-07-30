const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(800,320)

    //PI = 180 DEGREES
    log1 = new Log(800, 260, 300, PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);

    pig2 = new Pig(800,240)

    log2 = new Log(800, 180, 300, PI/2)

    box5 = new Box(810,160,70,70);

    log3 = new Log(760, 120, 150, PI/7)
    log4 = new Log(870, 120, 150, -PI/7)

    bird = new Birdy(200, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}