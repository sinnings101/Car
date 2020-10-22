var car, wall
var speed, weight
var deformation


function setup() {
  createCanvas(1200,400);
  car = createSprite(100, 200, 20, 20);
  car.shapeColor = "white";

  wall = createSprite(1100,200,30,350);
  wall.shapeColor = "gray";

  speed = Math.round(random(50,100));
  weight = Math.round(random(400,1500));


}

function draw() {
  background(0);  

  if(wall.x - car.x < (wall.width/2 + car.width/2)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500
    

    if(deformation >= 180){
      car.shapeColor = "red";
    }
    else if(deformation >= 100 && deformation < 180){
      car.shapeColor = "green";
    }
    else if(deformation < 100){
      car.shapeColor = "yellow";
    }
  }
  else{
    car.velocityX = 8;
  }






  drawSprites();
}