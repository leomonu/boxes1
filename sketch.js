
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var box;
var rand;
var rand1;


 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}




function mousePressed() {
    if (mouseY < 350) {
        rand =  Math.random(1)*100;
        rand1 =  Math.random(1)*100;
        box = new Box(mouseX,mouseY,rand,rand1);
        
        boxes.push(box);
        // Every time a mouse press occures create a new box.
    }
    ground = new Ground(600,height,1200,20)
}

function draw() {

    // Draw all the elements including the slider that 
    Engine.update(engine);
    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    
for(var i = 0;i<boxes.length;i=i+1){
    boxes[i].display();
}    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

