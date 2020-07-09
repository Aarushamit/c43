var enemy1, enemy2, enemy3, enemy1_img, enemy2_img, enemy3_img, background_img;

var bg;
bg.y = bg.height/2;


function preload() {
enemy1_img = loadImage("spaceship1.jpg");
enemy2_img = loadImage("spaceship1.jpg");
enemy3_img = loadImage("spaceship2.jpg");
background_img = loadImage("download.jpeg");

}

function setup() {
  createCanvas(1200, 600);
  
  
  enemy1 = new SpaceShip(400, 200);
  enemy2 = new SpaceShip(300, 200);
  enemy3 = new SpaceShip(200, 200);

  bg = createSprite(600, 300, 1200, 600);
  bg.addImage("bg", background_img);


 

}

function draw() {
  

  if (bg.y > 500) {
    bg.y = bg.height/2;
  }
 
  enemy1.display();
  enemy2.display();
  enemy3.display();



 
 
 


}

