var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,pac,pacImg

function preload(){
    pacImg=loadImage("pac.png");
}

function setup(){

    createCanvas(800,400);
    ob1=createSprite(400,5,800,10);
    ob1.shapeColor="yellow"
    ob2=createSprite(400,395,800,10);
    ob2.shapeColor="yellow"
    ob3=createSprite(5,200,10,400);
    ob3.shapeColor="yellow"
    ob4=createSprite(795,200,10,400);
    ob4.shapeColor="yellow"

    ob5=createSprite(300,100,600,5);
    ob5.shapeColor="yellow"
    
    ob6=createSprite(500,150,600,5);
    ob6.shapeColor="yellow"

    ob7=createSprite(300,200,600,5);
    ob7.shapeColor="yellow"
    
    ob8=createSprite(500,250,600,5);
    ob8.shapeColor="yellow"

    pac=createSprite(750,350,10,10);
    pac.addImage("right",pacImg);
    pac.scale=0.06

    spawnDots();
}

function draw(){
    background(0);

    pac.bounceOff(ob1);
    pac.bounceOff(ob2);
    pac.bounceOff(ob3);
    pac.bounceOff(ob4);
    pac.bounceOff(ob5);
    pac.bounceOff(ob6);
    pac.bounceOff(ob7);
    pac.bounceOff(ob8);
    

    if (keyDown(UP_ARROW)){
        pac.velocityY=-3;
        pac.velocityX=0;
    }
    if (keyDown(DOWN_ARROW)){
        pac.velocityY=3;
        pac.velocityX=0;
    }
    if (keyDown(RIGHT_ARROW)){
        pac.velocityY=0;
        pac.velocityX=3;
    }
    if (keyDown(LEFT_ARROW)){
        pac.velocityY=0;
        pac.velocityX=-3;
    }


   
    drawSprites(); 
}
function spawnDots(){
    for(var x=200;x<800;x=x+50){
        var dots=createSprite(x,280,10,10);
        dots.shapeColor="red"
    }
}
